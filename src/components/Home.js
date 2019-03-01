import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';
//connect this component to our Redux store. 'connect' is a fiunction we invoke to bring back a higher order component from react-redux library to do that.

// const Home = () => {
class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0,10) 
    //             })
    //         })
    // }
    render() {
        console.log(this.props);
        const { posts } = this.props

        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="Pokeball"/>
                        <div className="card-content">
                            <Link to={'/'+ post.id}>                            
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        ) 
    }
}

//map state variables to the props of the component
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
//usually we do stuff like 'export default higher-order-comp(Home)'. But here connect() is a fn that brings back a higher order component. Then that higher order component is wrapping our component
export default connect(mapStateToProps)(Home) //now Home is connected to the redux store

//mapStateToProps: now when the Home is connected to redux, it knows what property to grab from redux  and which props object it is to be mapped to