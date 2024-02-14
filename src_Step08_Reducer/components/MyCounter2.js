// src/components/MyCounter2.js

import { useReducer } from "react"

// reducer(차원을 감소 시키는?) 함수 만들기

// 현재 state 와 action 을 전달받아서 새로운 state 값을 리턴해주는 함수 
const reducer = (count, action)=>{
    let newCount
    if(action === "minus"){
        newCount = count-1
    }else if(action === "plus"){
        newCount = count+1
    }else{
        newCount = count
    }
    //상태값과 액션값을 활용해서 새로운 상태값을 리턴해주면 된다.
    return newCount
}

function MyCounter2(){
    /*
        [ 상태값, 상태를 변경할때 사용할 함수 ] = useRecucer( 리듀서 함수, 초기값)
    */
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <button onClick={()=>{
                // "minus" action 을 발행해서 상태값을 변경 시킨다 
                dispatch("minus")
            }}>-</button>
            <strong>{count}</strong>
            <button onClick={()=>{
                // "plus" action 을 발행해서 상태값을 변경 시킨다 
                dispatch("plus")
            }}>+</button>
        </div>
    )
}

export default MyCounter2