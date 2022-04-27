import React from "react";
import "./components/common.css";
// import { Provider } from "react-redux";
// import { configStore } from "./state/store";
// import { Home } from "./components/Home";
import {ReactCalculator} from "./Calculator/ReactCalculator"
function App() {
  // const localstore = configStore();
  return (
    <div className="main">
      <ReactCalculator/>
      {/* wrapping home inside provider */}
      {/* <Provider store={localstore}>
        <Home />
        {/* here home is being wrapped inside provider */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
