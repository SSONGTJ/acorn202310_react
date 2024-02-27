// src/pages/Home.js

import axios from "axios"
import { useEffect, useState } from "react"

export default function Home(){

    const [notice, setNotice] = useState([])

    useEffect(()=>{
        //공지사항 받아오기
        axios.get("/notice")
        .then(res=>setNotice(res.data))
        .catch(error=>console.log(error))
    }, [])

    return (
        <>
            <h1>인덱스 페이지입니다</h1>
            <h2>공지사항</h2>
            <ul>
                {notice.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </>
    )
}