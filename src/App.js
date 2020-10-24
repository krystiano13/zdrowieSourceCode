import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import Monitor from './components/Monitor/Monitor';
import Calculator from './components/Calculator/Calculator';
import Licznik from './components/Licznik/Licznik';
import About from './components/About/About';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/zdrowie/" component={HomePage} />
          <Route exact path="/zdrowie/content" component={Navigation} />
          <Route exact path="/zdrowie/content/covid" component={Monitor} />
          <Route exact path="/zdrowie/content/calc" component={Calculator} />
          <Route exact path="/zdrowie/content/calories" component={Licznik} />
          <Route exact path="/zdrowie/content/about" component={About} />
        </Switch>
      </Router>
    )
  }
}

export default App;
