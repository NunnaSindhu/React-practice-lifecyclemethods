
import React, { Component } from "react";
// passing props form parent to grand child //Getting data from grand child to parent

class GrandChild extends Component {
  constructor() {
      super();
    this.state = {
      count: 0
    };
  }
  clickHandler = () => {
    this.setState((state)=>{return { count: state.count + 1 }}, () => {
      this.props.getCount(this.state.count);
    });
  };
  render() {
    return (
        <div style={{border: '3px solid blue', padding: '20px'}}>
        <h3> {this.props.name} from Child component</h3>
        <h3>GandChild Count:{this.state.count}</h3>
        <button className='btn btn-primary' onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}



export default GrandChild;
