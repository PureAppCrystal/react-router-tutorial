import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';
import './App.css';
import { Posts } from './pages';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/about" component={About}/> */}
      <Switch>
        <Route path="/about/:name?" component={About}/>
      </Switch>
      <Route path="/posts" component={Posts}/>
    </div>
  )
}

export default App;
