import { useDispatch, useSelector } from "react-redux"

export default function BComponent(){
    const userName=useSelector(state => state.userName)
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch({
            type:"UPDATE_USER",
            payload:null
        })
    }
    return (
        <div>
            <p>B Component 입니다</p>
            { userName && <button onClick={handleDelete}>userName 삭제</button>}
        </div>
    )
}