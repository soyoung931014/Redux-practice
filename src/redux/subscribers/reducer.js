import {ADD_SUBSCRIBER, REMOVE_SUBSCRIBER} from './types'

const initialState = {
    count: 370
}
 

const subscribersReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state, // 현재 스테이트 복사를 한다. 
                count: state.count + 1  // 복사를 한 후 count 값만 변경해준다.
            } 
        case REMOVE_SUBSCRIBER:
            return {
                ...state, 
                count: state.count - 1
            }
        default: return state       
    }
}
export default subscribersReducer;