//** action은 redux에서 function을 부를 때 쓰는 두 번쨰 parameter, 혹은 argument이다. */
//**  dispatch는 action에 보내준다.
//**  subscribe는 store안에 있는 데이터 변화들을 알 수 있게 해준다. countStore.subscribe(f)
//** 만약 녜가 change를 너의 store에서 감지하고 싶다면 change를 구독하면된다.(countStore.subscribe(f)) */
// 개선사항 1. switch case쓰기 2. type:"" string쓰면 오타날 수 있으니까 오타 방지 위해  변수 선언해주기

import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

const ADD ="ADD"
const MINUS = "MINUS"
const countModifier = (count = 0 , action) => {
 switch (action.type) {
  case ADD:
    return count + 1
  case MINUS:
    return count -1
  default:
    return count  
  }
  }

const handleMinus = () => {
  countStore.dispatch({type: MINUS})
}

const countStore = createStore(countModifier) // store 생성

const onChange = () => {
  //console.log("there was a change on the store") // 이렇게 하고 버튼을 계속 누르면 store에 변화가 있다.  
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

add.addEventListener("click", () => countStore.dispatch({type:ADD}))
minus.addEventListener("click", handleMinus)
