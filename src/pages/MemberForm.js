// src/pages/MemberForm.js

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemberForm(){
    //라우트 페이지 이동을 도와주는 함수
    const navigate = useNavigate()

    //입력한 글내용을 state 로 관리하기 
    const [state, setState]=useState({})
    //handleChange 함수에서 입력한 글 내용을 일괄 관리한다.
    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    //추가 버튼을 눌렀을때
    const handleSave=()=>{
        //state object 의 내용을 전송한다
        axios.post("/members", state)
        .then(res=>{
            if(res.data.isSuccess){
                alert("추가 했습니다");
                //글 목록보기로 이동 (javascript 로 라우터 이동, useNavigate() Hook 이 필요하다 )
                navigate("/members")
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <>
            <h2>새로운 회원 입력 양식</h2>
            <input type="text" name="name" placeholder="이름..." onChange={handleChange}/>
            <input type="text" name="addr" placeholder="주소..." onChange={handleChange}/>
            <button onClick={handleSave}>추가</button>
        </>
    )
}