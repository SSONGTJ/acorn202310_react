
// src/pages/CafeDetail.js

import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
//css import
import myCss from './css/cafe_detail.module.css'
//binder import
import binder from 'classnames/bind'
//cx 함수 
const cx=binder.bind(myCss)


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
            setState(res.data.dto)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [num]) //경로 파라미터가 변경될때 서버로 부터 데이터를 다시 받아오도록 한다.

    //댓글 폼에 있는 submit 버튼을 누르면 호출되는 함수 
    const handleSubmit = (e)=>{
        //action 에 명시한 위치로 페이지 이동이 되지 않도록 막기
        e.preventDefault()
        //form 의 action, method 값을 읽어와서 axios 를 이용해서 서버에 요청하기
        const action=e.target.action
        const method=e.target.method
        //form 에 입력한 내용을 FormData 객체에 담기 ( input 요소에 name 속성이 반드시 필요!)
        const formData = new FormData(e.target)

        axios[method](action, formData)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/cafes">Cafe</Link></li>
                    <li className="breadcrumb-item active">Detail</li>
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
            <div className={cx("content")} dangerouslySetInnerHTML={{__html:state.content}}></div>

            <h4>댓글을 입력해 주세요</h4>
            <form className={cx("comment-form")}
                action="/cafes/comments" 
                method="post" 
                onSubmit={handleSubmit}>
                <input type="hidden" name="ref_group" value={state.num}/>
                <input type="hidden" name="target_id" value={state.writer}/>
                <textarea name="content"></textarea>
                <button type="submit">등록</button>
            </form>
        </>
    )
}