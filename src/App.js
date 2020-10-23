import React from 'react';
import Front from './components/front';
import Chat from './components/chat';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (  
  <>
  <Router>
    <Route path="/:name"  component={Chat}/>
    <Route path="/" exact component={Front}/>
  </Router>
  </>);
}

export default App;
