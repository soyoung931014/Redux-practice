import React, {useState} from 'react'
// 리덕스에서 이제 정보 가져오자: connect()을 이용하자.
import { connect } from 'react-redux'
import { addView } from '../redux'

function Views(props) {
    console.log(props, "🌸") //구조분해할당으로 const {count, addView} = props도 가능
    const [number, setNumber] = useState(1)
    return (
        <div className='items '>
            <h1>조회수 : {props.count}</h1>
            <input type='text' value ={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.addView(number)}>조회하기!</button>    
        </div>
    )
}

const mapStateToProps = (state) => { //구조분해할당으로 {subscribers}도 가능
    console.log(state, 'state')// 여기다 찍은 콘솔로그랑 <Subscribers/> 기능부분에 찍은 콘솔이랑 다르단걸 기억하자
    //{views: {…}, subscribers: {…}} 'state'
    return {
        count: state.views.count  //or count: subscribers.count 따라서 여기 부분이 count: state.count이면 안된다. 
    }
}   
// 위의 count는 props로 전달이 된다.

const mapDispatchToProps = (dispatch) => {
    return {
        addView: (number) => {dispatch(addView(number))} 
    }
}
// const mapDispatchToProps = {
//     addSubscriber // addSubscriber: addSubscriber
// }

export default connect(mapStateToProps,mapDispatchToProps)(Views)


 // 이제는 버튼을(구독하기)눌렀을때 액션을 처리(호출)해서 reducer에서 상태변경을 하는것을 해보자
 // 이걸하기 위해서는 dispatch에다 담아서 reducer함수에 보내줘야해ㅔ