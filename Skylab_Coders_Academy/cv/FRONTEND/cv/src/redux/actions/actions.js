/* eslint-disable no-debugger */
import axios from 'axios';
import actions from './actionsTypes';

export default function loadCurriculumData() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/pablomartinezCV/api/retrieve');

    const cvAction = {
      type: actions.LOAD_CV_DATA,
      data
    };

    dispatch(cvAction);
  };
}

export function loadPortfolio(portfolio) {
  return {

    type: actions.LOAD_PORTFOLIO,
    data: portfolio

  };
}
