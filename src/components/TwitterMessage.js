import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "", remainingChar: this.props.maxChars};
  }

  handleChange = e => {
    if (e.target.value.length < this.state.value.length) {
      this.setState({
        value: e.target.value,
        remainingChar: this.state.remainingChar+1
      });
    } else {
      this.setState({
        value: e.target.value,
        remainingChar: this.state.remainingChar-1
      });
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value} />
        <strong> Remaining Characters: </strong>
        {this.state.remainingChar}
      </div>
    );
  }
}

export default TwitterMessage;
