// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Profile from "./Profile";
import ClassCouner from "./Counter";
import HookCounter from "./HookCounter";

function App() {
  return (
    <div>
      <Profile username="carrot-farm" name="김수현 " />
      <ClassCouner />
      <HookCounter />
    </div>
  );
}

export default App;
