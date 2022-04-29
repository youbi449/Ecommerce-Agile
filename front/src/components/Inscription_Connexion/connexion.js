import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import {
  Redirect
} from "react-router-dom";





export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      response: '',
    };
    sessionStorage.setItem('token', '');
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
          </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              name="email"
              onChange={this.change}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
          </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              name="password"
              onChange={this.change}
            />
            <div className="text-center mt-4">
              <MDBBtn onClick={this.submit} color="unique" type="submit">
                Sign in
            </MDBBtn>
              <span className="response">{this.state.response}</span>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };

  submit() {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then(res => {
      if (res.data.token) {
        sessionStorage.setItem('token', JSON.stringify([res.data.token,res.data.id_user]));
        return <Redirect to={{
          pathname: '/home',
          state: { success_auth: true },
        }}
        />
      } else {
        
        this.setState({ response: res.data.error })
      }
    }).catch(function (error) {
      console.log('What happened? ' + error);
    });
  }

  change(e) {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  }
}