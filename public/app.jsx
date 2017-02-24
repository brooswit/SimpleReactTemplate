class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      password: props.password
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleSubmit(event) {
    alert(this.state.username + " / " + this.state.password);
    event.preventDefault();
  }

  handleUsernameChange(event) {
    console.log(event);
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    console.log(event);
    this.setState({password: event.target.value});
  }
}

var rootElement = React.createElement('div', {},
  React.createElement('div', {}, "hello world"),
  React.createElement(LoginForm, {})
);

ReactDOM.render(rootElement, document.getElementById('react-app'))