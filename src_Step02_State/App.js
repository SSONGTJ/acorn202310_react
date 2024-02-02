
import { Component } from 'react';
import './App.css'

//클래스형 component
class App extends Component{
  //상태값(state) 정의하기
  state={
    count:0
  }
  //버튼을 눌렀을때 실행할 함수 
  buttonClicked = ()=>{
    //state (상태값) 을 변경시키기

    //state 값을 직접 수정하면 UI 에 자동 반영이 안된다.
    //this.state.count++
    //console.log(this.state.count)
    
    /*
      [상태를 변화시켜야 UI 가 update 된다.]

      부모(React.Component) 가 가지고 있는 setState() 함수를 호출하면서 
      새로운 object 의 참조값을 전달해야 상태가 변화되었다고 간주된다. 
    */

    //새로운 object 를 만들어서 
    // const newObj={
    //   count:this.state.count+1
    // }
    // // setState() 함수 호출하면서 전달하기 
    // this.setState(newObj)

    //위의 내용을 줄여서 아래와 같이 쓸수 있다. 
    this.setState({
      count:this.state.count+1
    })
  }

  //render() 함수에서 리턴하는 jsx 로 화면 구성이 된다.
  render(){

    return (
      <div className="container">
        <h1>인덱스 페이지 입니다</h1>
        {/* jsx 에서 state 는 this.state 형식으로 참조 가능 */}
        <button onClick={this.buttonClicked}>{this.state.count}</button>
      </div>
    )
  }
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
