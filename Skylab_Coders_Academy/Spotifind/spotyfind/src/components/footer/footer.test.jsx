import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';

describe('Given a Footer component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('Renders a div with className search-params__queries', () => {
    act(() => {
      render(<BrowserRouter><Footer /></BrowserRouter>, container);
    });
    const div = document.querySelector('.search-params__queries');
    expect(div).toBeInTheDocument();
  });

  describe('When an artist tag button is clicked', () => {
    it('Then the tag button should not be in the document', () => {
      act(() => {
        render(<BrowserRouter><Footer /></BrowserRouter>, container);
      });
      const button = container.querySelector('div.queries__artists button');
      expect(button.textContent).toBe('queen');

      act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(button).not.toBeInTheDocument();
    });
  });

  describe('When a track tag button is clicked', () => {
    it('Then the tag button should not be in the document', () => {
      act(() => {
        render(<BrowserRouter><Footer /></BrowserRouter>, container);
      });
      const button = container.querySelector('div.queries__tracks button');
      expect(button.textContent).toBe('crystalized');

      act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(button).not.toBeInTheDocument();
    });
  });

  describe('When search button is clicked', () => {
    test('Then searchRecommendations should be called', () => {
      act(() => {
        render(<BrowserRouter><Footer /></BrowserRouter>, container);
      });

      const search = container.querySelector('.search-button');
      const searchRecommendations = jest.fn();

      act(() => {
        search.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(searchRecommendations).toHaveBeenCalled();
    });
  });
});
