
/*
    useEffect(()=>{
        //여기는 component 가 활성화 될때 실행되는 영역
        return ()=>{
            //여기는 component 가 비활성화 될때 실행되는 영역
        }
    }, [])
*/

import { useEffect } from "react"

//함수형 component 는 부모 component 가 전달한 props 가 매개변수에 object type 으로 전달된다
function Fortune2({msg}){

    useEffect(()=>{
        console.log("Fortune2 활성화됨")
        return ()=>{
            console.log("Fortune2 비활성화됨")
        }
    }, [])

    return (
        <p>오늘의 운세 입니다 <strong>{msg}</strong></p>
    )
}

export default Fortune2