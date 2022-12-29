import React from "react";
import PropTypes from "prop-types";

export default class OutputLua extends React.Component {
  static propTypes = {
    value: PropTypes.string
  };

  render() {
    return (
      <div className="lua-code-output">
        <h1>Output :</h1>
        <input
          type="text"
          value={this.props.value}
          readOnly
        />
      </div>
    );
  }
}