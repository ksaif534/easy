import * as api from '../api/index.js';

export const createLearningSpace = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createLearningSpace(formData);
        dispatch({type:'CREATE_LEARNING_SPACE',payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const getLearningSpaces = () => async (dispatch) => {
    try {
        const { data } = await api.getLearningSpaces();
        dispatch({type:'FETCH_LEARNING_SPACES',payload:data});
    } catch (error) {
        console.log(error);
    }
} 

export const getLearningSpace = (id) => async (dispatch) => {
    try {
        const { data } = await api.getLearningSpace(id);
        dispatch({type:'FETCH_LEARNING_SPACE',payload:data});
    } catch (error) {
        console.log(error);
    }
}
