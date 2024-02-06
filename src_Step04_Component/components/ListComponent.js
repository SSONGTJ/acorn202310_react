// components/ListComponent.js

import { Component } from "react";

class List extends Component{
    render(){
        
        return (
            <ul>
                {/* 
                    jsx 객체가 여러개 들어 있는 배열을 랜더링 할때는 
                    각각의 jsx 객체를 유일하게 식별할수 있는 겹치치 않는 pk 값을 지정해야 한다.
                    DB 에서 읽어온 데이터라면 DB 에 있는 primary key 값을 넣어주면 되고 
                    그렇지 않은 경우에는 겹치지 않는 숫자를 얻어내서 직접 넣어주어야 한다. 
                */}
                {this.props.list.map((item, index) => <li key={index}>{item} <button onClick={()=>{
                    //삭제 버튼을 눌렀을때 onDelete() 함수를 호출하면서 index 를 전달한다 
                    this.props.onDelete(index)
                }}>x</button></li>)}
            </ul>
        )
    }
}

export default List