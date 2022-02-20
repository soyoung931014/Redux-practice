import {FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE} from './types'

const fetchCommentSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

const fetchCommentFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}


//thunk를 사용할 수 있기 때문에 리턴으로 디스패치를 인자로 넘겨받은 함수를 사용할 수 있다.
export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(comments => dispatch(fetchCommentSuccess(comments)))
        .catch(error => dispatch(fetchCommentFailure(error)))
    }
}
