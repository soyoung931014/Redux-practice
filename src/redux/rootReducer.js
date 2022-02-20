import { combineReducers } from "redux";
import subscribersReducer from './subscribers/reducer'
import viewReducer from "./views/reducers";
import commentsReducer from "./comments/reducers";

const rootReducer = combineReducers ({
    views: viewReducer,
    subscribers: subscribersReducer,
    comments: commentsReducer
    
})

export default rootReducer

// 이 부분 다시 store에다가 보내줘

