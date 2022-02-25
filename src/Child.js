import React from "react";
import GrandChild from "./GrandChild";

// passing props form parent to grand child//Getting data from grand child to parent
class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState(
      (state) => {
        return { count: state.count + 1 };
      },
      () => {
        this.props.getCount(this.state.count);
      }
    );
  };
  render() {
    return (
      <div
        style={{ border: "3px solid green", padding: "20px", margin: "20px" }}
      >
        <h3>Child Count:{this.state.count}</h3>
        <h4>{this.props.name} from App component</h4>
        <button className="btn btn-success" onClick={this.clickHandler}>
          Click
        </button>
        <GrandChild getCount={this.props.getCount} name={this.props.name} />
      </div>
    );
  }
}

export default Child;
