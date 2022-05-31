import { Fragment } from "react";
import "./App.css";

import InputWatch from "./component/InputWatch";
import ListWatch from "./component/ListWatch";

function App() {
  return (
    <Fragment>
      <InputWatch />
      <ListWatch />
    </Fragment>
  );
}

export default App;
