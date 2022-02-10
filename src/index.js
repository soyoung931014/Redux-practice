//* state mutation(변형)금지(push같은거 사용금지), 새로운 state(object)를 리턴하자
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
  store.dispatch({type: ADD_TODO, text: toDo, id: Date.now()})
}
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (currentState =[], action) => {
  console.log(action) // {type: 'ADD_TODO', text: 'hi'}
  switch (action.type) {
    case ADD_TODO:
      return [...currentState, { text: action.text }] //**  state.push(action.text)이걸 하지 않을것이다. 새로운 array를 만들것임
      //* 그리고 array는 과거의 state와 새로운 TODO를 갖고 있게될거다.
    case DELETE_TODO:
      return []  
    default:
      return []  
  }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
form.addEventListener("submit", onSubmit)