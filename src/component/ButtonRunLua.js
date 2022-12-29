import React from "react";
import PropTypes from "prop-types";

export default class ButtonRunLua extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  render() {
    return (
      <div className="button-run">
        <button onClick={this.handleClick}>
          Run
        </button>
      </div>
    );
  }

  handleClick = () => {
    this.props.clickHandler();
  }
}