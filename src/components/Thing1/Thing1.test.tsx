import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing1 } from './Thing1.stories';

describe('Thing1', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
