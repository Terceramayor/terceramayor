import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Dashboard from './dashboard';

import stringsCompilation from '../../notMagicStrings';

describe('Given the favourites list item component', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  describe('When the Dashboard is initially rendered', () => {
    test('An h1 element with the text "Welcome to Spotifind" shall be created', () => {
      act(() => {
        render(<Dashboard status={
            `${stringsCompilation.INITIAL_RECOMMENDATIONS}`
}
        />, container);
      });

      const divContainerClass = document.querySelector('h1').innerHTML;

      expect(divContainerClass).toBe('Welcome to Spotifind');
    });
  });

  describe('When the Dashboard is rendered for the Seeds recommendations', () => {
    test('An h2 element with the text "Recommendations" shall be created', () => {
      act(() => {
        // useAuth0.mockImplementation(() => ({ user: { name: 'Pablo' } }));
        // retrieveUserData.mockImplementation(() => {
        //   const action = {
        //     type: actionTypes.RETRIEVE_USER_DATA,
        //     data: mockUserData
        //   };
        //   dispatcher.dispatch(action);
        // });
        // eslint-disable-next-line react/jsx-filename-extension
        render(<Dashboard status={`${stringsCompilation.RETURN_RECOMMENDATION_SEED}`} />, container);
      });

      const divContainerClass = document.querySelector('h2').innerHTML;

      expect(divContainerClass).toBe('Recommendations');
    });
  });
});
