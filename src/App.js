import logo from "./logo.svg";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

// class App extends React.Component {
//   state = {
//     num: 0
//   }

//   add() {
//     this.setState((state) => ({
//       num: state.num + 1
//     }))
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p onClick={() => this.add()}>
//             <code title={this.state.num}>{this.state.num}</code>
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function EffectExample() {
  const [num, updateNum] = useState(0);
  useEffect(() => {
    console.log('useEffect');
    // updateNum(99)
    return () => {
      console.log('destory useEffect');
    }
  }, [num])

  useLayoutEffect(() => {
    console.log('useLayoutEffect');

    // updateNum(100)
    return () => {
      console.log('destory useLayoutEffect');
    }
  }, [num])
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => updateNum((num) => num + 1)}>
          <code title={num}>{num}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Learn React</span>
        </a>
      </header>
    </div>
  );
}

function DiffSingleElementExaple(params) {
  const [state, setState] = useState("a")
  const a = (
    <div key="xxx">ka song</div>
  )
  const b = (
    <div key="xxx">xiao bei</div>
  )

  return (
    <div onClick={() => setState((status) => (status === "a" ? "b" : "a"))}>
      {state === "a" ? a : b}
    </div>
  );
}

function DiffMultiElementExaple(params) {
  const [state, setState] = useState("a")
  const a = (
    <ul>
      <li key="a">a</li>
      <li key="b">b</li>
      <li key="c">c</li>
      <li key="d">d</li>
    </ul>
  )
  const b = (
    <ul>
      <li key="a">a</li>
      <li key="c">c</li>
      <li key="d">d</li>
      <li key="b">b</li>
    </ul>
  );

  return (
    <div onClick={() => setState((status) => (status === "a" ? "b" : "a"))}>
      {state === "a" ? a : b}
    </div>
  );
}

// function App() {
//   const [num, updateNum] = useState(0);

//   return <p onClick={() => updateNum(num => num + 1)}>{num}</p>;
// }

export default DiffMultiElementExaple;
