import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };

    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    const list = [...this.state.list];
    if (newItem.value !== "") {
      list.push(newItem);
    } else {
      alert("Item can't be empty");
    }

    this.setState({
      newItem: "",
      list,
    });

    this.input.current.focus();
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <div className="todo-container">
          <div>{/* <p>Add an item ...</p> */}</div>
          <div class="card add">
            <input
              type="text"
              class="txt-input"
              placeholder="Type here to add item"
              ref={this.input}
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <button id="add-btn" onClick={() => this.addItem()}>
              Add
            </button>
          </div>
          <ul className="todos">
            {this.state.list.map((item) => {
              return (
                <li className="card item" key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>x</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
