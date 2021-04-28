import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav';

describe('Given a Nav component', () => {
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

  test('Renders a nav with a className root-navigation', () => {
    act(() => {
      render(<BrowserRouter><Nav /></BrowserRouter>, container);
    });

    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav.className).toBe('root-navigation');
  });
});
