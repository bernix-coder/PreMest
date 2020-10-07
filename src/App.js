import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About';
import ChooseUs from './components/ChooseUs'
import Article from './components/Article';
import Forms from './components/Forms'
import Tables from './components/Tables';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Image from './components/Image';
function App() {
  return (
<Router>
          <Navbar/>
          <About/>
          <ChooseUs/>
          <Article/>
          <Forms/>
          <Tables/>
          <Videos/>
          <Image/>
          <Footer/>
   <Switch>
      <Route path='/'/>
  </Switch>
</Router>
 

  );
}

export default App;
