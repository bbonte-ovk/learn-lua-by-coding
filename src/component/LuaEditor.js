import React from "react";
import PropTypes from "prop-types";

import "./LuaEditor.css";

// component
import ButtonRunLua from "./ButtonRunLua"

export default class LuaEditor extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    changeHandler: PropTypes.func,
    value: PropTypes.string
  };

  render() {
    return (
      <div className="lua-code-input">
        <textarea
          type="text"
          value={this.props.value}
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