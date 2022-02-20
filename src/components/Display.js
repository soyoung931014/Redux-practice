import React from 'react'
import { connect } from 'react-redux'

function Display(props) { // {count,addSubscriber}
    console.log(props,'++++')
    return (
        <div>
            <input value ={props.count} type='text'></input>
            <p>구독자 수: {props.count}</p>
        </div>
    )
}
const mapStateToProps = (state) => { //구조분해할당으로 {subscribers}도 가능
    console.log(state, 'state')// 여기다 찍은 콘솔로그랑 <Subscribers/> 기능부분에 찍은 콘솔이랑 다르단걸 기억하자
    //{views: {…}, subscribers: {…}} 'state' // 즉 rootReducer에 담긴것들이 나온것이다.
    return {
        count: state.subscribers.count  //or count: subscribers.count 따라서 여기 부분이 count: state.count이면 안된다. 
    }
}  

export default connect(mapStateToProps)(Display)
