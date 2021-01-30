import React, {FC} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
