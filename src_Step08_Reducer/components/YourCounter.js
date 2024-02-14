// src/components/YourCounter.js

import { useReducer } from "react"

// reducer(차원을 감소 시키는?) 함수 만들기

// 현재 state 와 action 을 전달받아서 새로운 state 값을 리턴해주는 함수 
const reducer = (state, action)=>{
   let newState
   if(action === "minus"){
        newState = {
            ...state,
            count:state.count-1
        }
   }else if(action === "plus"){
        newState = {
            ...state,
            count:state.count+1
        }
   }else{
        newState=state
   }
   return newState
}

function YourCounter(){
    /*
        [ 상태값, 상태를 변경할때 사용할 함수 ] = useRecucer( 리듀서 함수, 초기값)
    */
    const [state, dispatch] = useReducer(reducer, {count:0})

    return (
        <div>
            <button onClick={()=>{
                // "minus" action 을 발행해서 상태값을 변경 시킨다 
                dispatch("minus")
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick={()=>{
                // "plus" action 을 발행해서 상태값을 변경 시킨다 
                dispatch("plus")
            }}>+</button>
        </div>
    )
}

export default YourCounter