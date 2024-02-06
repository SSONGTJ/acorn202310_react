// src/App2.js

import { Component } from "react";
// ListComponent import
import List from './components/ListComponent'

class App2 extends Component{
    //상태값 관리 
    state={
        friends:["김구라","해골","원숭이","주뎅이","덩어리"],
        animals:["dog","cat","elemphant"]
    }
    render(){
        
        console.count("App2 render()")

        return (
            <div className="container">
                <h1>친구 목록</h1>
                <input ref={(refValue)=>{
                    //함수에 전달되는 참조값을 필드에 저장하기 (필드를 미리 정의하지 않아도 된다)
                    this.inputName = refValue
                }} type="text" placeholder="친구 이름 입력..."/>
                <button onClick={()=>{
                    //1. input 요소에 입력한 문자열을 읽어와서
                    const name=this.inputName.value
                    //2. 해당 문자열이 추가된 새로운 배열을 얻어내서
                    const newArray=[...this.state.friends, name]
                    const newArray2=this.state.friends.concat(name)
                    //3. state 를 업데이트한다 
                    this.setState({
                        ...this.state,
                        friends:newArray
                    })
                }}>추가</button>
                <List list={this.state.friends} onDelete={(idx)=>{
                    // idx 번째 인덱스가 제거된 새로운 배열을 얻어내서 
                    const newArray=this.state.friends.filter((item, index) => index !== idx)
                    /* 위의 filter 함수는 아래의 코드를 대신한다.
                    const newArray2=[]
                    for(let i=0;i<this.state.friends.length; i++){
                        if(i !== idx){
                            newArray2.push(this.state.friends[i])
                        }
                    }
                    */
                    //새로운 상태값을 얻어내서 
                    const newState={
                        ...this.state, //기존의 state 값을 일단 펼쳐 놓고 
                        friends:newArray //수정할 state 만 수정한다 
                    }
                    // 새로운 상태값으로 덮어쓰기
                    this.setState(newState)
                }}></List>
                
                <h1>동물 목록</h1>
                <input ref={(refValue)=>{
                    this.inputAnimal=refValue
                }} type="text" placeholder="동물이름 입력..."/>
                <button onClick={()=>{
                    this.setState({
                        ...this.state,
                        animals:this.state.animals.concat(this.inputAnimal.value)
                    })
                }}>추가</button>
                <List list={this.state.animals} onDelete={(idx)=>{
                    this.setState({
                        ...this.state,
                        animals:this.state.animals.filter((item, index) => index !== idx)
                    })
                }}></List>
            </div>
        )
    }
}

export default App2