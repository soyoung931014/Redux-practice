import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);


// // 매 순간 너가 setState를 호출할때 마다 react는 새로운 state와 함께 render function을 호출할거야
// // 리액트는 자동적으로 너의 class component의 render method를 실행해 자동적으로!
// class Detail extends React.Component { // react component로부터 확장되고 screen에 표시돼
//    state = {
//        count: 0
//    }
//    add = () => {                        //this.state.count
//        this.setState(current => ({count: current.count + 1 })) 
//    } // 이렇게 사용하는게 state를 set할때 react에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다.
//    minus = () => {
//        this.setState(current => ({ count: current.count - 1 }))
//    }
//     render() { // 리액트는 자동적으로 모든 class component의 render method를 실행하고자한다.
//         return (
//         <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//         </div>
//         )
//     }
// }
// export default Detail