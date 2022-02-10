//** action은 redux에서 function을 부를 때 쓰는 두 번쨰 parameter, 혹은 argument이다. */
//**  dispatch는 action에 보내준다.
//**  subscribe는 store안에 있는 데이터 변화들을 알 수 있게 해준다. countStore.subscribe(f)
import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")


const countModifier = (count = 0 , action) => {
  console.log(count, action) //*{type: '@@redux/INIT9.t.3.3.c'} // {type: 'hello'}
  if (action.type === 'ADD') {
    return count + 1
  } else if (action.type === 'Minus') {
    return count - 1
  }
  return count
}

const handleMinus = () => {
  countStore.dispatch({type: "Minus"})
}

const countStore = createStore(countModifier) // store 생성

const onChange = () => {
  //console.log("there was a change on the store") // 이렇게 하고 버튼을 계속 누르면 store에 변화가 있다.  
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

add.addEventListener("click", () => countStore.dispatch({type:"ADD"}))
minus.addEventListener("click", handleMinus)
