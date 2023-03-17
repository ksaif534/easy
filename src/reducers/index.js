import { combineReducers } from 'redux';
import learningSpaces from './learningSpaces';
import posts from './posts';

export default combineReducers({
    learningSpaces,
    posts
});