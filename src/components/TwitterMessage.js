import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  };

  handleChange = e => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>Remaining characters:</p>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  };
};

export default TwitterMessage;
