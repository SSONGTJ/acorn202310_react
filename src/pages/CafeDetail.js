
// src/pages/CafeDetail.js

import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function CafeDetail(){
    // "/cafes/:num" 에서 num 에 해당하는 경로 파라미터 값 읽어오기
    const {num}=useParams()
    //cafe 하나의 정보를 상태값으로 관리 
    const [state, setState]=useState({})
    //검색 키워드 관련 처리 
    const [params, setParams]=useSearchParams({}) 

    console.log(new URLSearchParams(params).toString())

    //삭제 모달을 띄울지 여부를 상태값으로 관리
    const [modalShow, setModalShow]=useState(false)

    //로그인된 사용자명이 store 에 있는지 읽어와 본다. 
    const userName=useSelector(state=>state.userName)
    const navigate=useNavigate()

    useEffect(()=>{
        //서버에 요청을 할때 검색 키워드 관련 정보도 같이 보낸다.
        const query=new URLSearchParams(params).toString()
        axios.get("/cafes/"+num+"?"+query)
        .then(res=>{
            console.log(res.data)
            setState(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [num]) //경로 파라미터가 변경될때 서버로 부터 데이터를 다시 받아오도록 한다.

    //글 내용을 출력할 div 에 적용할 css
    const contentCss={
        "border-radius":"5px",
        "box-shadow":"0 4px 8px rgba(0, 0, 0, 0.2)"
    }

    return (
        <>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/cafes">Cafe</Link></li>
                    <li class="breadcrumb-item active">Detail</li>
                </ol>
		    </nav>
		
            { state.prevNum !== 0 ? <Link to={"/cafes/"+state.prevNum+"?"+new URLSearchParams(params).toString()}>이전글</Link> : ""}
            { state.nextNum !== 0 ? <Link to={"/cafes/"+state.nextNum+"?"+new URLSearchParams(params).toString()}>다음글</Link> : ""}
            
            { params.get("condition") &&
                <p>
                    <strong>{params.get("condition")}</strong> 조건
                    <strong>{params.get("keyword")}</strong> 검색어로 검색된 내용 
                </p>
            }
            <h1>글 자세히 보기 페이지</h1>
            <table>
                <tr>
                    <th>번호</th>
                    <td>{state.num}</td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>{state.writer}</td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td>{state.title}</td>
                </tr>
                <tr>
                    <th>조회수</th>
                    <td>{state.viewCount}</td>
                </tr>
            </table>
            <div style={contentCss} dangerouslySetInnerHTML={{__html:state.content}}></div>
        </>
    )
}