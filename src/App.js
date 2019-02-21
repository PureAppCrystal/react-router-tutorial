import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';
import './App.css';
import { Posts } from './pages';

class App extends Component {


  constructor() {
    super();


  }

  componentDidUpdate(prevProps, prevState) {
    console.log("## ComponentDidUpdate ##")
    console.log("prev location : ", prevProps.location)
    console.log("now  location : ", prevProps.location)
    if(prevProps.location !== this.props.location) {
      console.log("====== 주소가 바뀜 ======")
    }
  }

  handleChange() {
    this.setState({
      name: 'hello',
      value: 'react'
      
    })
  }


  render () {
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
  
}

export default App;
