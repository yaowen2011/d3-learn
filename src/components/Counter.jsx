import React from 'react';
// import ReactDOM from 'react-dom';
import  './Counter.css'

export default class Counter extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count0: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0
    }
  }

  render() {
    console.log('render')
    return (
      <div>
        <span className='triangle'></span>
        <svg>
          <path d="M0 0 L20 20 L0 20 Z" stroke='#ff0000' fill="skyblue"/>
        </svg>
        <div>{this.state.count0}</div>
        <div>{this.state.count1}<button onClick={this.onPlus1.bind(this)}> Plus 1 </button></div>
        <div>{this.state.count2}<button onClick={this.onPlus2.bind(this)}> Plus 2 </button></div>
        <div>{this.state.count3}<button onClick={this.onPlus3.bind(this)}> Plus 3 </button></div>
        <div>{this.state.count4}<button id="btn4" onClick={this.onPlus4.bind(this)}> Plus 4 </button></div>
      </div>
    )
  }

  componentDidMount() {
    /*在生命周期函数里更新是异步的，两次更新只会生效一次
      等价于
      let count0 = this.state.count0
      this.setState({count0: count0 + 1})
      this.setState({count0: count0 + 1})
    */
    this.setState({
      count0: this.state.count0 + 1
    })
    this.setState({
      count0: this.state.count0 + 1
    })

    document.querySelector('#btn4').onclick = () => {
      // 对于用这种方式绑定事件，React智商不够无法理解，于是用同步方式更新
      console.log('native')
      
      this.setState({
        count1: this.state.count1 + 1
      })
      this.setState({
        count4: this.state.count1 + 1
      })
    }
  }

  onPlus1() {
    // React 自带的事件监听函数里，是用异步方式更新
    this.setState({
      count1: this.state.count1 + 1
    })
    this.setState({
      count1: this.state.count1 + 1
    })
  }

  onPlus2() {
    // React 自带的事件监听函数里，是用异步方式更新。要想多次更新并且后一次依赖上一次结果，请使用异步写法
    this.setState(state => {
      return { count2: state.count2 + 1 }
    })
    this.setState(state => {
      return { count2: state.count2 + 1 }
    })
  }

  onPlus3() {
    setTimeout(() => {
      // setTimeout里的更新是同步的
      this.setState({
        count3: this.state.count3 + 1
      })
      this.setState({
        count3: this.state.count3 + 1
      })
    })
  }

  onPlus4() {
    console.log('click handle of react')
  }

}

// ReactDOM.render(<Counter />, document.querySelector("#root"))