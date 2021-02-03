import React, {FC} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Profile from './pages/Profile';

const App: FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article/:id" component={Detail} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
