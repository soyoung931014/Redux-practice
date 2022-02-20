import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchComments} from '../redux'
function Comments(props) { //{fetchComments, loading, comments}
    useEffect(() => {
        props.fetchComments()
    },[])
    const commentsItems = props.loading ? (<div>is loading...</div>) : (
        props.comments.map(comment => (
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        )) 
    )


    return (
        <div class="comments">
            {commentsItems}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        comments: state.comments.items
    }
}

const mapDispatchToProps = {
    fetchComments
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
