import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
import WinePage from './components/WinePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/:lotCode">
          <WinePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
