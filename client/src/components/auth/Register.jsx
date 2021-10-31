import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Register extends Component {
    render() {
        return (
          <div className="container">
            <h3>Get yourself Registered!</h3>
            <div className="row">
              <form className="col s8" onSubmit={(e) => this.submitForm(e)}>
                <div className="row">
                  <div className="input-field col s6">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      className="validate"
                      type="text"
                      name="name"
                      id="name"
                      //   value={this.state.email}
                      //   onChange={(e) => this.handleChange(e)}
                      placeholder="Enter your name"
                    />

                    <span
                      className="helper-text"
                      data-errors="Enter valid name"
                      data-success="correct!"
                    />
                  </div>
                  <div className="input-field col s6">
                    <label htmlFor="lastname">Last Name</label>
                    <br />
                    <input
                      className="validate"
                      type="text"
                      name="lastname"
                      id="lastname"
                      //   value={this.state.email}
                      //   onChange={(e) => this.handleChange(e)}
                      placeholder="Enter your last name"
                    />

                    <span
                      className="helper-text"
                      data-errors="Enter valid name"
                      data-success="correct!"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      className="validate"
                      type="email"
                      name="email"
                      id="email"
                      //   value={this.state.email}
                      //   onChange={(e) => this.handleChange(e)}
                      placeholder="Enter your email"
                    />

                    <span
                      className="helper-text"
                      data-errors="Enter valid email"
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
                      //   value={this.state.password}
                      //   onChange={(e) => this.handleChange(e)}
                      placeholder="Enter your password"
                    />

                    <span
                      className="helper-text"
                      data-errors="Incorrect password"
                      data-success="correct!"
                    />
                  </div>
                  <div className="input-field col s6">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <br />
                    <input
                      className="validate"
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      //   value={this.state.password}
                      //   onChange={(e) => this.handleChange(e)}
                      placeholder="Enter your password again"
                    />

                    <span
                      className="helper-text"
                      data-errors="Incorrect password"
                      data-success="correct!"
                    />
                  </div>
                </div>

                {/* {this.state.errors.length > 0 && (
                  <div>{this.displayErrors(this.state.errors)}</div>
                )} */}

                <div className="row">
                  <div className="col s6">
                    <button
                      className="btn wave-effect red lighten-2"
                      type="submit"
                      name="action"
                      //   onClick={this.submitForm}
                    >
                      Create Account
                    </button>
                  </div>
                  <div className="col s6">
                    <Link to="/login">
                    <button
                      className="btn wave-effect red lighten-2"
                      type="submit"
                      name="action"
                      //   onClick={this.submitForm}
                    >
                      Login
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

export default Register