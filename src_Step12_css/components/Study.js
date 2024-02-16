//src/components/Study.js

import { useState } from 'react'
import myCss from './css/custom_study.module.css'
import binder from 'classnames/bind'

// myCss object 를 바인딩(연결)해서 css 클래스 제어를 편하게 하기 위한 객체 
const cx = binder.bind(myCss)

export default function Study(){
    //myCss 는 object 이다 
    console.log(myCss)

    const [isBold, setBold]=useState(false)

    return (
        <div>
            <h3>Study Component</h3>
            <p className={myCss["bg-yellow"]}>열심히 공부해 보아요</p>
            <input type="checkbox" onChange={(e)=>{
                setBold(e.target.checked)
            }} checked={isBold}/>
            <p className={cx({'font-bold':isBold})}>클래스 추가 제거</p>
        </div>
    )
}
