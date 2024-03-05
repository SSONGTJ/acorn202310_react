// src/pages/GalleryDetail.js

import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"

export default function GalleryDetail(){
    // "/gallery/:num" 에서 num 에 해당하는 경로 파라키터 값 읽어오기
    const {num}=useParams()
    //gallery 하나의 정보를 상태값으로 관리 
    const [state, setState]=useState({})
    useEffect(()=>{
        axios.get("/gallery/"+num)
        .then(res=>{
            setState(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
    return (
        <>
            <h3>Gallery 자세히 보기 페이지</h3>
            <Card>
                <Card.Img variant="top" src={`/upload/images/${state.saveFileName}`}/>
                <Card.Body>
                    <Card.Text>{state.caption}</Card.Text>
                    <Card.Text>writer : <strong>{state.writer}</strong></Card.Text>
                    <Card.Text>{state.regdate}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}