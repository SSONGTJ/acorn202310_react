
import { Component } from 'react';
import './App.css'

//클래스형 component
class App extends Component{

  //render() 함수에서 리턴하는 jsx 로 화면 구성이 된다.
  render(){
    //jsx 객체를 만들어서 변수에 담기
    let p1 = <p>p1 입니다</p>
    let msgs = [<p>안녕</p>, <p>나야나</p>, <p>나는야 jsx</p>]
    // 데이터만 들어 있는 배열
    let animals = ["Cat", "Dog", "Elephant"]
    // 데이터가 들어 있는 배열을 이용해서 새로운 jsx 배열 얻어내기
    let result = animals.map((item)=>{
      
      return <li>{item}</li>
    })

    // map() 함수 안에 람다식을 넣으면 아래와 같다 
    let result2 = animals.map(item => <li>{item}</li>) 

    return (
      <div className="container">
        <h1>인덱스 페이지 입니다</h1>
        {p1}
        {msgs}
        <ul>
          {result}
        </ul>
        <ul>
          {result2}
        </ul>
        <ul>
          {animals.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
