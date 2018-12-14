import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }

  handleInputChange = (e) => {
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value
      })
    } else if (e.target.name === "password") {
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleInputChange} name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handleInputChange}name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
