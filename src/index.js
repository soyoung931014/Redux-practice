//** state란? 애플리케이션에서 변하는 데이터
// ** 리덕스는 data(관리하는데)를 도와주는 역할을 하기 위해 만들어짐. 그 데이터는 store에 저장됨
import { createStore } from "redux"
const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (state) => {
  // 인자 state = 0으로 하면 0 이나온다.
  //return 'hello' // 여기 리턴하는것이 곧 데이터
  console.log(state) // undefined
  return state
}
const countStore = createStore(countModifier) // createStore의 인자에는 함수 reducer이 필요
console.log(countStore) 
//**{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}  */

console.log(countStore.getState()) // hello

// <기억할것>
//** */ 1. 처음 store(data를 저장하는곳)을 만든다.
//** */ 2. store를 만들면 reducer라는것을 만들어주는데 이것은 데이터를 수정해주는 함수(function)이다.
//** */ 3. store의 데이터를 유일하게 수정해 줄 수 있는 것은 reducer함수 뿐이다.