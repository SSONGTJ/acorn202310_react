// src/pages/Transition4.js


import { createRef, useRef, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// uuid 로 부터 v4 함수(uuid 값을 리턴해주는 함수)를 import 해서 uuid 라는 이름으로 사용하기
import {v4 as uuid} from 'uuid'
import './css/transition4.css'
export default function Transition4(){
    //uuid 함수 테스트 
    const result = uuid()
    console.log(result)

    //알림 목록을 상태값으로 관리
    const [msgs, setMsgs] = useState([])
    //input 요소의 참조값을 얻어내기 위해
    const inputRef=useRef()

    return (
        <>
            <input ref={inputRef} type="text" placeholder="알림 메세지 입력..."/>
            <button onClick={()=>{
                //입력한 메세지 object 가 추가된 새로운 배열을 얻어내서 상태값을 변경한다 
                const obj={
                    id:uuid(),
                    text:inputRef.current.value,
                    nodeRef:createRef(null) //각각의 CSSTransition 의 참조값을 관리하기 위해 
                }
                setMsgs([...msgs, obj])
            }}>추가</button>
            <h3>알림 목록입니다</h3>
            <ListGroup>
                <TransitionGroup>
                    {
                        msgs.map(item=>(
                            <CSSTransition 
                                key={item.id} 
                                nodeRef={item.nodeRef}
                                timeout={500}
                                classNames="fade2"
                            >
                                <ListGroup.Item ref={item.nodeRef}>
                                    <Button variant="danger" onClick={()=>{
                                        const newArray=msgs.filter(it=>it.id !== item.id)
                                        setMsgs(newArray)
                                    }}>x</Button>
                                    {item.text}
                                </ListGroup.Item>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup> 
            </ListGroup>
        </>
    )
}