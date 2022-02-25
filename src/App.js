import "./App.css";
import ReactDOM from "react-dom";
// import Child from "./Child";
import React, { Component } from "react";
// import Form from "./Form";
// state and setstate examples

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: "test",
//       color:'pink',
//       id: 1,
//     };
//   }
//   changrHandler = (event) => {
//     this.setState({ value: event.target.value, key: event.target.id, color:event.target.value.length >6 ?"green":"yellow"},()=>{
//       console.log(this.state.value);
//     });

//   };
//   render() {
//     return (

//       <form style={{border: '3px solid red', padding: '20px'}}>
//         <input value={this.state.value} key={this.state.id} style={{backgroundColor:this.state.color,fontSize: "20px"}} onChange={this.changrHandler} />
//         </form>

//     );
//   }
// }

// passing props form parent to grand child /Getting data from grand child to parent
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//       count: 0,
//     };
//   }
//   getCount = (value) => {
//     this.setState({ count: value });
//   };
//   render() {
//     return (
//       <div
//         className="mt-4"
//         style={{ border: "3px solid red", padding: "20px" }}
//       >
//         <h3>App Count:{this.state.count}</h3>
//         <Child getCount={this.getCount} name={this.state.name} />
//       </div>
//     );
//   }
// }

//displaying data in table
// var stylingObject = {
//   table: {
//          border: "1px solid red",
// }}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [
//         { id: 1, name: "john", age: 20 },
//         { id: 1, name: "jenny", age: 20 },
//         { id: 2, name: "Sham", age: 30 },
//         { id: 3, name: "Ram", age: 40 },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <table >
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map((person, index) => (
//               <TableRow key={index} data={person} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class TableRow extends React.Component {
//   render() {
//     return (
//       <tr>
//         <td>{this.props.data.id}</td>
//         <td>{this.props.data.name}</td>
//         <td>{this.props.data.age}</td>
//       </tr>
//     );
//   }
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }
//   tick() {
//     this.setState({ date: new Date() });
//   }
//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.date.toLocaleString()}</h1>
//       </div>
//     );
//   }
// }

// todo list using class component

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//      text: "groceries",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//   };

//   handleChange(e) {
//     this.setState({
//       text: e.target.value
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState((prevState) => ({
//       list: prevState.list.concat(this.state.text),
//       text: ""
//     }));
//   }
//   removeItem(index) {
//     const list = this.state.list;
//     list.splice(index, 1);
//     this.setState({ list });
//   }
//   render() {
//     return (
//       <div>
//         <h1>TODO List </h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             value={this.state.text}
//             onChange={(e) => this.handleChange(e)}
//           />
//           <button>ADD</button>
//           <ol>
//             {this.state.list.map((item, index) => {
//               return (
//                 <li key={index}>
//                   {item}
//                   <button onClick={() => this.removeItem(index)}>Delete</button>
//                 </li>
//               );
//             })}
//           </ol>
//         </form>
//       </div>
//     );
//   }
// }

// React Lifecycle methods

export default class App extends Component {
  constructor(props) {
    console.log("constructor initial phase of app");
    super(props);
    this.state = {
      name: "GUVI",
      date: new Date(),
      color: "Green",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("this is getDerivedStateFromProps");
    return {
      name: props.newname,
    };
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.time = setTimeout(() => {
      this.setState({ color: "Red" });
    }, 5000);
   
  }
//   componentDidMount() {
//  this.interval = setInterval(() => this.tick(), 1000);
//   }
  shouldComponentUpdate() {
    console.log("component should updated");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    document.getElementById("div1").innerHTML ="The previous color is " + prevState.color;
}
  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.getElementById("div2").innerHTML =
      "Updated color is" + this.state.color;
  }

  comoponentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
    clearTimeout(this.time);
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <h1>Time:{this.state.date.toLocaleString()}</h1>
        <h1>{this.state.color}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
