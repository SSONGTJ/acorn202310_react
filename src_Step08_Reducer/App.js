import Friends from "./components/Friends";
import MyCounter from "./components/MyCounter";
import MyCounter2 from "./components/MyCounter2";
import YourCounter from "./components/YourCounter";

//함수형 component
function App() {
  
  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <h3>MyCounter</h3>
      <MyCounter></MyCounter>
      
      <h3>MyCounter2</h3>
      <MyCounter2></MyCounter2>

      <h3>YourCounter</h3>
      <YourCounter></YourCounter>

      <h3>Friends 컴포넌트</h3>
      <Friends></Friends>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
