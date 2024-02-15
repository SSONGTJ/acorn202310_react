
// src/components/Fortune.js

import { Component } from "react";

class Fortune extends Component{
    //component 가 활성화 될때 호출되는 함수
    componentDidMount(){
        console.log("Fortune 이 활성화됨")
    }
    //component 가 비활성화 될때 호출되는 함수 
    componentWillUnmount(){
        console.log("Fortune 이 비활성화됨")
    }

    render(){
        return (
            <p>오늘의 운세 입니다 <strong>{this.props.msg}</strong></p>
          
        )
    }
}
export default Fortune