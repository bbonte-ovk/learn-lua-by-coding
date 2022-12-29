import React from 'react';
import { load as luaVM } from "fengari-web";

import "./App.css";

// components
import LuaEditor from './LuaEditor';
import OutputLua from './OutputLua';
import Problem from './Problem';

const runlua = source => luaVM(source)();

export default class App extends React.Component {
  state = {
    luaInput: '',
    luaOutput: ''
  };

  render() {
    return (
      <div className="component-app">
        <LuaEditor clickHandler={this.runLuaCode} changeHandler={this.handleChange} value={this.state.luaInput} />
        <OutputLua value={this.state.luaOutput}/>
        <Problem title='Problem #1 - toto' content="bla bla bla"/>
      </div >
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
