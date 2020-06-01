import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
// import "antd/dist/antd.css";
import "./index.less";

class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
