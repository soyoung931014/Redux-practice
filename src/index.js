//* state mutation(변형)금지(push같은거 사용금지), 새로운 state(object)를 리턴하자
import {createStore} from "redux"
const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")



const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

const reducer = (currentState =[], action) => {
  // console.log(action) // {type: 'ADD_TODO', text: 'hi'}
  switch (action.type) {
    case ADD_TODO:
      return [...currentState, { text: action.text ,id: Date.now()}] //**  state.push(action.text)이걸 하지 않을것이다. 새로운 array를 만들것임
      //* 그리고 array는 과거의 state와 새로운 TODO를 갖고 있게될거다.
    case DELETE_TODO:
      return []  
    default:
      return []  
  }
}


const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

const onSubmit = (e) => {
  e.preventDefault()
  const toDo = input.value
  input.value = ""
  // 이부분 함수로 따로 빼서 정리하자store.dispatch({type: ADD_TODO, text: toDo, id: Date.now()})
  dispatchAddToDo(toDo)
}
const dispatchAddToDo = (text) => {
  //store.dispatch({type: ADD_TODO, text})
  store.dispatch(addToDo(text))
}
const dispatchDeleteToDo = (e) => {
  console.log(e.target.parentNode.id)
  const id = e.target.parentNode.id
  //store.dispatch({type: DELETE_TODO, id: e.target.parentNode.id})
  store.dispatch(deleteToDo(id))
}

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ''
  toDos.forEach(toDo => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    ul.appendChild(li)
    li.appendChild(button)
    button.innerText = "삭제"

  })
}
store.subscribe(paintToDos)






form.addEventListener("submit", onSubmit)




 