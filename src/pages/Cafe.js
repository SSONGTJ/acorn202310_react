// src/pages/Cafe.js

import { Link } from "react-router-dom";

export default function Cafe(){

    return (
        <>
            <Link to="/cafes/new">새글 작성</Link>
            <h1>Cafe 글 목록 입니다</h1>
        </>
    )
}