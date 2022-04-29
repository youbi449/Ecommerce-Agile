import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

export default class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      response: '',
    };
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              first Name
              </label>
            <input
              type="text"
              id="defaultFormRegisterFirstNameEx"
              className="form-control"
              name="firstName"
              onChange={this.change}
            />
            <br />
            <label htmlFor="defaultFormRegisterlastNameEx" className="grey-text">
              last name
              </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              name="lastName"
              onChange={this.change}
            />
            <br />
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
                Register
                </MDBBtn>
              <span className="response">{this.state.response.data}</span>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
  submit() {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/signup',
      data: {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      }
    }).then(res => {
      this.setState({ response: res.data });
    }).catch(function (error) {
      console.log('What happened? ' + error);
    }); 
  }

  change(e) {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "firstName") {
      this.setState({ firstname: e.target.value });
    } else if (e.target.name === "lastName") {
      this.setState({ lastname: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  }
}
