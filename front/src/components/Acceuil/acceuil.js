import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
<<<<<<< HEAD
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
// import Logo from '../Images/tesla.jpeg';
=======
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
>>>>>>> ADD Panier
import SignIn from '../Inscription_Connexion/connexion';
import Inscription from '../Inscription_Connexion/inscription';
import './acceuil.css';
import Products from '../Products';
import Details from '../Details';
import Panier from "../Panier";
import Avis from '../Avis';
import NewProduct from '../AddProduct'
import { isAuth } from '../security'
import {
  Button
} from 'reactstrap';


export default class Acceuil extends Component {

  constructor() {
    super()
  }
  render() {
    let nav = isAuth() ? <Logged /> : <NotLog />
    return (

      <div className="Acc">
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {nav}
          </Navbar>
          <Switch>
            <Route path="/inscription">
              <Inscription />
            </Route>
            <Route path="/home">
              <Products />
            </Route>
            <Route path="/connexion">
              <SignIn />
            </Route>
            <Route path="/product/:id" render={(props) => <Details {...props} />} />
            <Route path="/panier">
              <Panier />
            </Route>
            <Route path="/avis/:id" render={(props) => <Avis {...props} />} />
            <Route path="/add/product">
              <NewProduct />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

function NotLog() {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">

    <div className="Acc">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/panier">Panier</Nav.Link>
              <Nav.Link eventKey={2} href="/inscription">Inscription</Nav.Link>
              <Nav.Link eventKey={2} href="/connexion">Connexion</Nav.Link>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/home">
            <Products />
          </Route>
          <Route path="/connexion">
            <Signin />
          </Route>
          <Route path="/product/:id" render={(props) => <Details {...props} />} />
          <Route path="/panier">
            <Panier />
          </Route>
          <Route path="/profil/edit">
            <Modification />
          </Route>
        </Switch>
      </Router>
      {/* <Nav>
        <Nav.Link href="/panier">Panier</Nav.Link>
        <Nav.Link eventKey={2} href="/inscription">Inscris-toi</Nav.Link>
        <Nav.Link eventKey={2} href="/connexion">
          Connexion
</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  )
} */}

function Logged() {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav>
        <Nav.Link href="/panier">Panier</Nav.Link>
        <Nav.Link eventKey={2} href="/profil">Profil</Nav.Link>
        <Nav.Link eventKey={2} href="/settings">Parametre</Nav.Link>
        <Link to="/connexion">
          <Button renderAs="button">
            <span>Deconnecter</span>
          </Button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  )
}

