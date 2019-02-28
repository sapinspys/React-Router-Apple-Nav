import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        {/* <Route path='/' exact component={Home}></Route>
        <Route path='/mac' component={Mac}></Route>
        <Route path='/ipad' component={Ipad}></Route>
        <Route path='/iphone' component={Iphone}></Route>
        <Route path='/watch' component={Watch}></Route>
        <Route path='/tv' component={Tv}></Route>
        <Route path='/music' component={Music}></Route>
        <Route path='/support' component={Support}></Route>
        <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
