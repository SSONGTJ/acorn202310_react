import 'bootstrap/dist/css/bootstrap.css'

//classnames 를 import 해서 cn 이라는 이름으로 사용할 준비 
import cn from 'classnames'

import binder from 'classnames/bind'
import Study from './components/Study'


//함수형 component
function App2() {
    const styles={
        aaa:"btn",
        bbb:"btn-success"
    }
    const cx = binder.bind(styles)

    return (
        <div className="container">
            <h1>인덱스 페이지 입니다</h1>
            <button className={cn('btn', 'btn-success')}>버튼1</button>
            <button className={cn('btn', {'btn-success':true})}>버튼2</button>
            <button className={cn(['btn', 'btn-success'])}>버튼3</button>
            <button className={cx('aaa', 'bbb')}>버튼4</button>

            <Study></Study>
        </div>
    );
}

export default App2;
