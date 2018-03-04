import React, { Component } from "react";
import { Canvas } from "./canvas";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="container">
        <div className="header">Header</div>
        <div className="game">Game</div>
        <div className="footer">
          Brought to you with{" "}
          <img src="assets/images/heart.png" className="footer-image" /> by
          Stephanie Cure
        </div>
      </section>
    );
  }
}
