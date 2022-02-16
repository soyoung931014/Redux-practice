import React from 'react'
import { useState } from "react"
import { connect } from "react-redux";
import { actionCreators } from '../store'
import ToDo from '../component/ToDo'

//* connect는 argument로 state와 dispatch를 가진다.
//* ● mapStateToProps는 두 종류의 argument와 함께 호출되는 function이다.
//* ▷ 첫번째 argument는 Redux store에서 온 state이다.
//* ▷ 두번째 argument는 component의 props이다.

//* ※connect()는 return한 것을 component의 prop에 추가해준다.

function Home({toDos, addToDo}) {
    //console.log(props)
    
 const [text, setText] = useState("")   
  const onChange = (e) => {
     setText(e.target.value)
 }
 const onSubmit = (e) => {
    // console.log(text)
     e.preventDefault()
     setText("")
     addToDo(text)// text를 보냄 */
 } 

    return (
        <div>
            <h1>ToDoList</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>클릭</button>
            </form>
            <ul>
            {/* {JSON.stringify(toDos)}  */} 
            {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
            </ul>  //*여기가 우리의 todo가 렌더링되는곳(store로부터 state를 가져올 수 있도록 해야한다)*/
        </div>
    )
    
    
}    
function mapStateToProps(state,ownProps) {
    console.log(state, ownProps)
    // state는 from store, ownProps는 from Home
    //return {state: state, sexy: 'ha'} 
    return { toDos : state }
    }

 function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
     }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Home) // mapStateToProps함수에있는것들을 Home에 연결시켜준다.
// redux state로부터 home(component)에 prop으로서 전달한다는것
// connet()는 Home으로 보내는 props에 추가될 수 있도록 허용해준다.



// store.getState()
// state를 받아다가 components에 전달해야했다.

