import React, { Component } from "react";
import "./Header.css";
import image from "./logo_todo.svg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo"></img>
          <h2>ToDoApp</h2>
        </header>
      </div>
    );
  }
}
