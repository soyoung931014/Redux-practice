// actions (actions.js, types.js)
// reducer(reducer)
// store

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
//import subscribersReducer from './subscribers/reducer' => 2개의 리듀서함수를 모두 배출하고싶다면 이부분 rootReducer.js로 넘어간다.
//* 리덕스 로거 사용하기 : 로거를 사용하면 스테이트가 변경될때마다 콘솔에 로거가 찍히는것을 볼 수 있다.
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//const store = createStore(subscribersReducer)// 인자로 reducer를 넣어주어야 함. createStore(reducer)
// subscribers, views 둘 다 리듀서를 가져와야한다면.. combineReducer을 이용한다. => rootReducer.js파일만들자
const middleware = [logger, thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))



// 이제 store을 외부에서도 사용가능하게 내보내준다. 
export default store;
// app.js에가서 리덕스를 사용하게 해준다. // {Provider}생성해주면됨