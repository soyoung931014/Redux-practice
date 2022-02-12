//*⭐️store와 component를 connect하는 방법(redux state에서 정보가져오기)
//* connect()는 컴포넌트들을 store에 연결시켜줘. 2개의 argument를 가짐 (state, dispatch 택1)
//* 즉 Home.js에서  store.dispatch()하기를 원해 or store.getState() 하기를 원해?
//우리의 경우 둘다 하고싶음(todo 추가하고싶고, 가져오고싶고)

import { createStore } from "redux";
// store.subscribe() : 스토어의 변경사항을 알려줌
// store.getState():현재의 state를 알려준다.
//** connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해준다. 
//* react-router로부터 받은 props들이 있고 내가 추가해준 sexy:true도 있다.
//* 사실 보통은 state를 추가한다.

const ADD = "ADD";
const DELETE = "DELETE";

// * action creator
export const addToDo = text => {
    return {
        type: ADD,  
        text
    };
};

export const deleteToDo = id => {
    return {
        type: DELETE, 
        id
    }
}


const reducer = (state =[], action) => {
    switch (action.type) {
        case ADD:
            return [...state, { text: action.text, id: Date.now()}]
        case DELETE:
            return state.filter(el => el.id !== action.id);
        default:
            return state;    
    }
}

const store = createStore(reducer);

export default store
