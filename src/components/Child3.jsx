import React from 'react'

class Child extends React.Component{
  constructor(props) {
    super(props)
    console.log('child constructor')
  }

  componentWillMount() {
    console.log('child3 will mount')
  }

  componentDidMount() {
    console.log('child3 did mount')
  }

  componentDidUpdate() {
    console.log('child3 did update')
  }

  componentWillUnmount() {
    console.log('child3 will unmount')
  }

  render() {
    console.log("child3 rendering");
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
