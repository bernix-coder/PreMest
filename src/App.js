import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About';
import ChooseUs from './components/ChooseUs'

function App() {
  return (
<Router>
   <Navbar/>
  <About/>
 <ChooseUs/>

   <Switch>
      <Route path='/'/>
  </Switch>
</Router>
 

  );
}

export default App;
