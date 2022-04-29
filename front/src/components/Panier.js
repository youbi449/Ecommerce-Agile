
import React, { Component } from 'react';
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Achat from './Achat/page_achat';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    
  } from "react-router-dom";

export default class Panier extends Component {

    constructor() {
        super()
        this.state = {
            panier: localStorage.getItem('panier'),
            items: [],
            total: 0
        }
        this.deleteToCart = this.deleteToCart.bind(this)
        this.deleteAllCart = this.deleteAllCart.bind(this)
    }
    
    componentDidMount() {
        axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/panier`,
            data: this.state.panier
        }).then(res => {
            this.setState({ items: res.data });
            this.state.items.map((e) => {
                this.setState({ total: eval(this.state.total) + eval(e.prix) })
            });
        })
    }

    deleteToCart(id) {
        let local = JSON.parse(localStorage.getItem('panier'));
        for (let x in local) {
            if (id === parseInt(local[x])) {
                local.splice(x, 1)
                break;
            }
        }
        localStorage.setItem('panier', JSON.stringify(local))
        window.location.reload();
    }

    deleteAllCart() {
        let empty = [];
        localStorage.setItem('panier', JSON.stringify(empty));
        window.location.reload();
    }

    
    render() {
       
        return (
            
            <div>
          <Router>
              <Switch>
                  <Route path="/achat">
                      <Achatcommande/>
                  </Route>
              </Switch>
          </Router>

            
               <center> <h1>Votre panier</h1></center>
                <center><div className="items">
                    <ul>
                        {this.state.items.map((e, index) => {

                            return (
                                <li>{index + 1}. {e.title}  prix:{e.prix} <Button onClick={() => this.deleteToCart(e.id)}> - </Button></li>
                            )
                        })}
                    </ul>

                    Payer: {this.state.total} euros <br></br>

                    <Button onClick={this.deleteAllCart}>Videz le panier ?</Button><br></br><br></br>
                    <Link to="/achat"> Confirmer la commande </Link>
                </div>
                </center>
            </div>

        )
        function Achatcommande() {
            return <Achat />
         } 
       
    }
    
    
}