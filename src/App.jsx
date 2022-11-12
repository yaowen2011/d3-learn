import React from 'react'
// import Child from './components/Child'
import './App.css';
import Column from './components/charts/Column'
class App extends React.Component{
  constructor(props) {
    super(props)
    console.log('parent constructor')
  }
  state = {count: 0}

  componentWillMount() {
    console.log('parent will mount')
  }

  componentDidMount() {
    // // console.log('parent did mount')
  }

  componentDidUpdate() {
    console.log('parent did update')
  }

  render() {
    console.log("parent rendering");
    return (
      <div>
        <Column />
      </div>
    )
  }
}

export default App;
