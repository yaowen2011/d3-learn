import React from 'react'
import Child from './components/Child'
import Child2 from './components/Child2'
import './App.css';
import Column from './components/charts/Column'
import Counter from './components/Counter'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('parent constructor')
  }
  state = { count: 0 }

  componentWillMount() {
    console.log('parent will mount')
  }

  componentDidMount() {
    console.log('parent did mount')
  }

  componentDidUpdate() {
    console.log('parent did update')
  }

  testHandle() {
    console.log(this)
  }

  render() {
    console.log("parent rendering");
    return (

      <Router>
          <div>
          <div>
        <Column />
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>click me</button>
        <button onClick={this.testHandle}>click me</button>
        <Child count={this.state.count} />
        
      </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about1">About1</Link>
                </li>
                <li>
                  <Link to="/about2">About2</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about1">
                <Child count={this.state.count} />
              </Route>
              <Route path="/about2">
                <Child2 count={this.state.count} />
              </Route>
            </Switch>
          </div>
          <div>
            <Counter />
          </div>
        </Router>
      
    )
  }
}

export default App;


