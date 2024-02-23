import { useSelector } from "react-redux"

export default function AComponent(){
    //redux store 에서 userName 얻어오기 
    const userName=useSelector(state => state.userName)
    return (
        <div>
            <p>A Component 입니다</p>
            { userName && <p><strong>{userName}</strong> 로그인 중...</p> }
        </div>
    )
}