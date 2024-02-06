
import { Component } from 'react';
import './App.css'
import Child from './components/ChildComponent';
import Contact from './components/ContactComponent';
import MyName from './components/MyNameComponent';

//클래스형 component
class App extends Component{

  //render() 함수에서 리턴하는 jsx 로 화면 구성이 된다.
  render(){
    const name="원숭이"
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다</h1>
        <Child/>
        <Child/>
        <Child/>
        <Contact></Contact>
        {/* MyName component 에  name 이라는 property 명으로 string type "김구라" 전달하기 */}
        <MyName name={"김구라"} ></MyName>
        <MyName name={"해골"}></MyName>
        <MyName name={name}></MyName>
        <MyName name={"덩어리"} action={()=>{
          alert("자식 component 의 버튼이 클릭되었네?")
        }}></MyName>
      </div>
    )
  }
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
