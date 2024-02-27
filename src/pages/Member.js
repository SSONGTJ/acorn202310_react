// src/pages/Member.js

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Member(){
    //회원 목록 상태값 관리
    const [members , setMembers] = useState([])

    const refresh = ()=>{
        axios.get("/members")
        .then(res=>{
            //응답된 데이터를 이용해서 state 를 수정한다 
            setMembers(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    //Member Component 가 활성화 되는 시점에 회원 목록 요청하기 
    useEffect(()=>{
        refresh()
    }, [])
    //삭제버튼을 눌렀을때 호출되는 함수 
    const handleDelete = (num)=>{
        axios.delete("/members/"+num)
        .then(res=>{
            //화면 refresh  
            refresh()
        })
        .catch(error=>{
            console.log(error)
        })
    }

    //페이지 이동하기 위한 함수
    const navigate = useNavigate()

    return (
        <>
            <Link to="/members/new">회원추가</Link>
            <h1>회원 목록 입니다</h1>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>주소</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                { members.map(item => <tr key={item.num}>
                    <td>{item.num}</td>
                    <td>{item.name}</td>
                    <td>{item.addr}</td>
                    <td>
                        <button onClick={()=>{
                            navigate(`/members/${item.num}/edit`)
                        }}>수정</button>
                    </td>
                    <td>
                        <button onClick={()=>handleDelete(item.num)}>삭제</button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </>
    )
}