// App.js

import React from 'react';
import Counter from '../container/Counter';
import AddCounter from '../container/AddCounter';
import RemoveCounter from '../container/RemoveCounter';

const App = () => (
 
  <div className="container">
    <Counter/><br />
    <div className="columns">
      <AddCounter/>
      <RemoveCounter/>
    </div>
  </div>

);
export default App;