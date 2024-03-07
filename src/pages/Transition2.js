// src/pages/Transition2.js

// css 로딩
import { Button } from 'react-bootstrap'
import './css/transition2.css'
// npm install animate.css 해서 설치한 css 로딩하기
import 'animate.css'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Transition2(){

    const [boxShow, setBoxShow]=useState(true)
    const tranClass={
        enter:"animate__animated",
        enterActive:"animate__rotateIn",
        exit:"animate__animated",
        exitActive:"animate__rotateOut"
    }

    const nodeRef = useRef(null)
    return (
        <>
            <h3>CssTransition + animate.css 활용</h3>
            <Button onClick={() => setBoxShow(!boxShow)}>토글</Button>
            <CSSTransition 
                nodeRef={nodeRef}
                classNames={tranClass}
                in={boxShow} 
                timeout={1000}
                unmountOnExit
            >
                <div ref={nodeRef} className="box"></div>
            </CSSTransition> 
        </>
    )
}