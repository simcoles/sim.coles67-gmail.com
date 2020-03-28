import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
};

class Input extends Component {
  render() {
    return (
      <div>
        <button>Click Me</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Input);
