
/*
    특정 component 에만 적용될 외부 css 파일을 만들때는  xxx.module.css 형태로 만들어야한다
    import 된 myCss 는 object 이다
    - objcect 의 구조
    {클래스명:"변형된 클래스명", ... }
*/
import myCss from './css/custom_play.module.css'

export default function Play(){
    //myCss 는 object 이다 
    console.log(myCss)

    return (
        <div>
            <h3>Play Component</h3>
            <p className={myCss.green}>열심히 놀아 보아요</p>
            <p className={myCss["big-font"]}>어쩌구... 저쩌구...</p>
            <p className={myCss.green +" "+ myCss["big-font"]}>두개의 클래스를 모두 적용?</p>
            <p className={`${myCss.green} ${myCss["big-font"]}`}>두개의 클래스를 모두 적용?</p>
        </div>
    )
}