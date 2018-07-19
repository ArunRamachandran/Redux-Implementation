// App.js

import React from 'react';
import Counter from '../container/Counter';
import AddCounter from '../container/AddCounter';

const App = () => (
 
  <div className="container">
    <Counter></Counter> <br />
    <div className="columns">
      <AddCounter/>
    </div>
  </div>

);
export default App;