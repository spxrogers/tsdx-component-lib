import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing2 } from './Thing2.stories';

describe('Thing2', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
