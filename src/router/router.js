// src/router/router.js

import { createBrowserRouter } from "react-router-dom"
import Book from "../pages/Book"
import EditorComponent from "../pages/EditorComponent"
import Gallery from "../pages/Gallery"
import GalleryDetail from "../pages/GalleryDetail"
import Home from "../pages/Home"
import Member from "../pages/Member"
import MemberForm from "../pages/MemberForm"
import MemberUpdateForm from "../pages/MemberUpdateForm"
import Transition from "../pages/Transition"
import Transition2 from "../pages/Transition2"
import App from "../App"
import Transition3 from "../pages/Transition3"
import Transition4 from "../pages/Transition4"
import Cafe from "../pages/Cafe"
import CafeForm from "../pages/CafeForm"
import CafeDetail from "../pages/CafeDetail"

//라우트 정보를 배열에 저장하기
const routes=[
    {path:"/", element:<Home/>},
    {path:"/members", element:<Member/>},
    {path:"/members/new", element:<MemberForm/>},
    {path:"/members/:num/edit", element:<MemberUpdateForm/>},
    {path:"/gallery", element:<Gallery/>},
    {path:"/gallery/:num", element:<GalleryDetail/>},
    {path:"/editor", element:<EditorComponent/>},
    {path:"/book", element:<Book/>},
    {path:"/transition", element:<Transition/>},
    {path:"/transition2", element:<Transition2/>},
    {path:"/transition3", element:<Transition3/>},
    {path:"/transition4", element:<Transition4/>},
    {path:"/cafes", element:<Cafe/>},
    {path:"/cafes/new", element:<CafeForm/>},
    {path:"/cafes/:num", element:<CafeDetail/>}
  ]
//BrowserRouter 를 custom 으로 만들기
const router = createBrowserRouter([{
    path:"/",  //현재 경로가 최상위 경로 일때
    element:<App/>, //App Component 를 사용하겠다 
    children: routes.map((route)=>{  //자식 컴포넌트 정보 등록 
      return {
        index: route.path === "/", //자식의 path 가 "/" 면 index 페이지 역활을 하게 하기 
        path: route.path === "/" ? undefined : route.path, // path 에 "/" 두개가 표시 되지 안토록  
        element: route.element //어떤 컴포넌트를 활성화 할것인지 
      }
    })
}])

export default router