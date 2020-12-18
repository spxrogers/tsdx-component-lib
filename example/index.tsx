import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing1 } from '../src/components/Thing1/Thing1';
import { Thing2 } from '../src/components/Thing2/Thing2';

const App = () => {
  return (
    <div>
      <Thing1 />
      <Thing2 />
      <Thing2 tasteLike={"noms"} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
