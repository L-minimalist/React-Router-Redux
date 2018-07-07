import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Classify from './components/classify/classify';
import Summer from './components/summer/summer';

import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App clearfix">
          <Route exact path="/" component={Main}/>
          <Route path="/classify" component={Classify}></Route>
          <Route path="/summer" component={Summer}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
