import { combineReducers } from 'redux';
import curriculumReducer from './cvReducer';
import portfolioReducer from './portfolioReducer';

const rootReducer = combineReducers({
  curriculum: curriculumReducer,
  portfolioToRender: portfolioReducer
});

export default rootReducer;
