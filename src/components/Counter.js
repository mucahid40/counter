import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementIt } from '../actions/counter'

class Counter extends Component {
  componentDidMount() {
    console.log('tp: ',this.props)
    console.log('ts: ',this.state)
  }

  handleClick = () => {
    this.props.incrementIt()
    console.log("current numb",this.props.counter)
  }

  render() { 
    return (
      <div>
        <div>
          {this.props.counter.counter}
        </div>

        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, {incrementIt})(Counter)