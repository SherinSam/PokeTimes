const initState = {
    posts: [
        {id:1, title:'Squirtle laid an egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:2, title:'Charmander laid an egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        {id:3, title:'A Helix fossil was found', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
    ]
}

const rootReducer = (state=initState, action) => {
    // console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            // console.log(action.id);
            // console.log(post.id);
            return action.id.toString() !== post.id.toString()  //return true when ids are not same. tru instances are saved to the new array. so false is left out effectively deleting it non-destructively.
        })
        // console.log(newPosts);
        return {
            ...state, //if this line is not here, {posts: newPosts} will over write the entire state object without includin the values of other state attributes if any.
            posts: newPosts
        }
    }
    // console.log(state);
    return state
}

export default rootReducer