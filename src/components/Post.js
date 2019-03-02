import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

class Post extends Component {
    // state = {
    //     id: null
    // }
    // componentDidMount() {
    //     // console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     this.setState({id})
    // }

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render() {
        // console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p class="flow-text">{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return( 
            <div className="container">                
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => { //ownProps = this.props (props of this component apart from the ones from store)
    let id = ownProps.match.params.post_id 
    // console.log(typeof(id)) //string
    // console.log(typeof(state.posts[0].id)) //number
    return { 
        post: state.posts.find(post => post.id.toString() === id)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        //this function fires a Dispatch action to the reducer
        // deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
        deletePost: (id) => { dispatch(deletePost(id)) } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post); 