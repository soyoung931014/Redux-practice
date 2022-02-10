//* 바닐라자바스크립트 + 리덕스 이용하기
//* MUTATE STATE 절대 사용하지 말기
import   {createStore} from "redux"
const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")


// const createlist = (content) => {
//   const li = document.createElement("li")
//   li.innerText = content;
//   ul.appendChild(li)
// }

const onSubmit = (e) => {
  e.preventDefault()
  const toDo = input.value
  input.value = ""
  store.dispatch({type: ADD_TODO, text: toDo})
}
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (currentState =[], action) => {
  console.log(action) // {type: 'ADD_TODO', text: 'hi'}
  switch (action.type) {
    case ADD_TODO:
      return []
    case DELETE_TODO:
      return []  
    default:
      return []  
  }
}

const store = createStore(reducer)

form.addEventListener("submit", onSubmit)