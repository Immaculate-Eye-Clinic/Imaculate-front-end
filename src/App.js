import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
