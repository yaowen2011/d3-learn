import React from 'react'
import Child3 from './Child3'

class Child extends React.Component{
  constructor(props) {
    super(props)
    console.log('child2 constructor')
  }

  componentWillMount() {
    console.log('child2 will mount')
  }

  componentDidMount() {
    console.log('child2 did mount')
  }

  componentDidUpdate() {
    console.log('child2 did update')
  }

  componentWillUnmount() {
    console.log('child2 will unmount')
  }

  render() {
    console.log("child2 rendering");
    const {count} = this.props
    return (
      <div>
        {count}
        child
        <Child3 />
      </div>
    )
  }
}

export default Child;
