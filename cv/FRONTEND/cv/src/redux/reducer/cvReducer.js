/* eslint-disable no-debugger */
import actions from '../actions/actionsTypes';

export default function curriculumReducer(state = [], action) {
  switch (action.type) {
    case actions.LOAD_CV_DATA:
      return action.data;

    default:
      return state;
  }
}
