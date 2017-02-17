import { combineReducers } from 'redux';
import commentReducer from './comments';

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
