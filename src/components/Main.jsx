import React, { Component } from "react";
import Canvas from "./canvas";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <h1>Gameeeeeee</h1>
        <script type="text/javascript" src="./canvas.js" />
      </div>
    );
  }
}
