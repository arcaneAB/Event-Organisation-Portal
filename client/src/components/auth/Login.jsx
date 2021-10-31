import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/user_actions";

class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  displayErrors = (errors) => {
    errors.map((error, i) => <p key={i}>{error}</p>);
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    let loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      this.props.dispatch(loginUser(loginData)).then((response) => {
        if (response.payload.loginSuccess) {
          this.props.history.push("/");
        } else {
          this.setState({ errors: this.state.errors.concat("login Failed") });
        }
      });
    } else {
      this.setState({
        errors: this.state.errors.concat("Invalid email or password"),
      });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  render() {
    return (
      <div className="container">
        <h3>Get yourself Logged in!</h3>
        <div className="row">
          <form className="col s8" onSubmit={(e) => this.submitForm(e)}>
            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="validate"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Enter your email address"
                />

                <span
                  className="helper-text"
                  data-errors="Enter valid email address"
                  data-success="correct!"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className="validate"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Enter your password"
                />

                <span
                  className="helper-text"
                  data-errors="Incorrect password"
                  data-success="correct!"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
              <div>{this.displayErrors(this.state.errors)}</div>
            )}

            <div className="row">
              <div className="col s4">
                <button
                  className="btn wave-effect red lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Login
                </button>
              </div>

              <div className="col s4">
                <Link to="/register">
                  <button
                    className="btn wave-effect red lighten-2"
                    type="submit"
                    name="action"
                    // onClick={this.submitForm}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(RegisterLogin);
