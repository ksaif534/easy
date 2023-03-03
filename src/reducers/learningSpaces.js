const reducerlearningSpace = (state = { learningSpaces: [], isLoading: true },action) => {
    switch (action.type) {
        case 'FETCH_LEARNING_SPACES':
            return {
                ...state,
                learningSpaces: action.payload
            }
        case 'CREATE_LEARNING_SPACE':
            return {
                ...state,
                learningSpaces: [...state.learningSpaces,action.payload.data]
            }
        case 'FETCH_LEARNING_SPACE':
            return {
                ...state,
                learningSpace: action.payload 
            }
        default:
            return state;
    }
}

export default reducerlearningSpace;