import React, {FC} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App: FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/article/:id" component={Detail} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
