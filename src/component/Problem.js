import React from "react";
import PropTypes from "prop-types";

export default class Problem extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

  render() {
    return (
      <div className="problem">
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}