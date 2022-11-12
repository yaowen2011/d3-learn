import React from 'react'

class Child extends React.Component{
  constructor(props) {
    super(props)
    console.log('child constructor')
  }

  componentWillMount() {
    console.log('child will mount')
  }

  componentDidMount() {
    console.log('child did mount')
  }

  componentDidUpdate() {
    console.log('child did update')
  }

  render() {
    console.log("child rendering");
    const {count} = this.props
    return (
      <div>
        {count}
        child
      </div>
    )
  }
}

export default Child;
