import * as api from '../api/index';

export const createPost = (formData,id) => async (dispatch) => {
    try {
        const { data } = await api.createPost(formData,id);
        dispatch({Type:'CREATE_POST',payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const fetchPosts = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(id);
        dispatch({type:'FETCH_POSTS',payload:data});
    } catch (error) {
        console.log(error);
    }
}