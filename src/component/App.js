import React from 'react';
import "./App.css";
import { load as luaVM } from "fengari-web";

const runlua = source => luaVM(source)();

export default class App extends React.Component {
  state = {
    luaInput: '',
    luaOutput: ''
  };

  render() {
    return (
      <div className="component-app">
        <h1>Learn Lua by coding.</h1>
        <textarea
          id="lua-code-input"
          type="text"
          onChange={this.handleChange}
          value={this.state.luaInput}
        />
        <button onClick={this.runLuaCode}>
          Run
        </button>
        <h2>output:</h2>
        <input
          id="lua-code-output"
          type="text"
          value={this.state.luaOutput}
          readOnly
        />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ luaInput: e.target.value });
  }

  runLuaCode = () => {
    if (this.state.luaInput.length === 0) {
      return;
    }
    const vm = runlua(this.state.luaInput);
    this.setState({ luaOutput: vm });
  }
}
