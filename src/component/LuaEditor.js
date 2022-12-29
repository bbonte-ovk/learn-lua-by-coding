import React from "react";
import PropTypes from "prop-types";

import "./LuaEditor.css";

// component
import ButtonRunLua from "./ButtonRunLua"
import Editor from "@monaco-editor/react";

export default class LuaEditor extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    changeHandler: PropTypes.func,
  };

  render() {
    return (
      <div className="lua-code-input">
        <Editor
          defaultLanguage="lua"
          theme="vs-dark"
          defaultvalue="-- write lua code"
          onChange={this.handleChange}
        />
        <ButtonRunLua clickHandler={this.clickHandler} />
      </div>
    );
  }

  handleChange = (e) => {
    this.props.changeHandler(e);
  }

  clickHandler = () => {
    this.props.clickHandler();
  }
}