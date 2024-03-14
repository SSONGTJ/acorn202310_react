// src/pages/Home.js

import axios from "axios"
import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Home(){

    const [notice, setNotice] = useState([])

    //redux store 로 부터 로그인 여부 얻어오기
    const isLogin = useSelector(state => state.isLogin)

    useEffect(()=>{
        console.log("Home.js 의 useEffect() 에 전달한 함수 호출됨!")
        if(!isLogin)return
        //공지사항 받아오기
        axios.get("/notice")
        .then(res=>setNotice(res.data))
        .catch(error=>console.log(error))
    }, [isLogin]) //state 로 관리되는 값이 변경되었을때 useEffect() 안에 전달된 함수가 호출되게 하기

    return (
        <>
            <h1>인덱스 페이지입니다</h1>
            <p>로그인 여부 {JSON.stringify(isLogin)}</p>
            <ul>
                <li><Link to="/editor">SmartEditor 테스트</Link></li>
                <li><Link to="/book">Query Param 테스트</Link></li>
                <li><Link to="/transition">React Transition Group 테스트</Link></li>
                <li><Link to="/transition2">React Transition Group 테스트2</Link></li>
                <li><Link to="/ref_test">Ref 테스트</Link></li>
                <li><Link to="/module_css">Module Css 테스트</Link></li>
            </ul>
            <h2>공지사항</h2>
            <ListGroup as="ol" numbered>
                {notice.map((item, index)=><ListGroup.Item as="li" key={index}>{item}</ListGroup.Item>)}
            </ListGroup>
        </>
    )
}