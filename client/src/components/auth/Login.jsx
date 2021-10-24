import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <h3>Get yourself Logged in!</h3>
        <div className="row">
          <form className="col s8" onSubmit={(e) => this.submitForm(e)}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  className="validate"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Enter your email address"
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-errors="Enter valid email address"
                  data-success="correct!"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input
                  className="validate"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Enter your password"
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-errors="Incorrect password"
                  data-success="correct!"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <button
                  className="btn wave-effect red lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
