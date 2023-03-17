const reducerPosts = (state = { posts: [] },action) => {
    switch (action.type) {
        case 'CREATE_POST':
            return {
                ...state.posts,
                posts: [...state.posts,action.payload.data]
            }
        case 'FETCH_POSTS':
            return {
                ...state.posts,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default reducerPosts;