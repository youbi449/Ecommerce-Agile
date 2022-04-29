import React, { Component } from 'react';
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
<<<<<<< HEAD
import './detail.css'
import { Tab, Tabs } from 'react-bootstrap'
=======
import {
    Link
  } from "react-router-dom";

>>>>>>> ADD Panier



export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            avis: '',
            note: 0,
        }
        this.addToCart = this.addToCart.bind(this)
        this.change = this.change.bind(this)
        this.sendAvis = this.sendAvis.bind(this)
        this.note = this.note.bind(this)
    }
    addToCart() {
        if (localStorage.getItem('panier') === null) {
            let array = [this.props.match.params.id];
            localStorage.setItem('panier', JSON.stringify(array));
        } else {
            let items = JSON.parse(localStorage.getItem('panier'));
            items.push(this.props.match.params.id);
            localStorage.setItem('panier', JSON.stringify(items));
            console.log(items);
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/products/${id}`,
        }).then(res => {
            console.log(res);
            this.setState({ items: res.data });
        })
    }

    // render() {
    //     return (
    //         <div>
    //             <div className="cardordi">
    //                 <div class="card mb-3">
    //                     <div class="row no-gutters">
    //                         <div class="col-md-4">
    //                             <img src="https://picsum.photos/200/300" alt="image_product" />
    //                         </div>
    //                         <div class="col-md-8">
    //                             <div class="card-body">
    //                                 <h5 class="card-title">{this.state.items.title}</h5>
    //                                 <p class="card-text">Description : {this.state.items.description} </p>
    //                                 <p>Prix : {this.state.items.prix}</p>
    //                                 <Button onClick={this.addToCart}>Ajouter au panier</Button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    change(e) {
        this.setState({ avis: e.target.value })
        console.log(this.state.avis)
    }

    sendAvis(e) {
        let user = JSON.parse(sessionStorage.getItem('token'));
        const id = this.props.match.params.id;
        axios({
            method: 'POST',
            url: `http://127.0.0.1:8000/add/avis`,
            data: {
                id_user: user[1],
                avis: this.state.avis,
                note: this.state.note,
                product: id,
            }
        }).then(res => {
            this.setState({ response: res.data.success, avis: '' })
            console.log(res);
        })
    }
    note(e) {
        this.setState({ note: e.target.value });
    }

    render() {
        if (!sessionStorage.getItem('token')) {
            return (
                <div>
                    <h1>{this.state.items.title}</h1>
                    <img src="https://picsum.photos/200/300" alt="image_product" />
                    <p>Description: {this.state.items.description}</p>
                    <p>Prix: {this.state.items.prix}</p>
                    <Button onClick={this.addToCart}>Ajouter au panier</Button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{this.state.items.title}</h1>
                    <img src="https://picsum.photos/200/300" alt="image_product" />
                    <p>Description: {this.state.items.description}</p>
                    <p>Prix: {this.state.items.prix}</p>
                    <Button onClick={this.addToCart}>Ajouter au panier</Button>
                    <form>
                        < label >
                            Avis:
                            <textarea value={this.state.avis} onChange={this.change} name="avis" placeholder="Les insultes seront sanctionés !"></textarea>
                        </label>
                        <select onChange={this.note}>
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {this.state.response}
                        <Button onClick={this.sendAvis}>Envoyer</Button>
                    </form>
                    <Link to={"/avis/"+ this.props.match.params.id}>Voir les avis</Link>
                </div>
            )
        }
    }
}


