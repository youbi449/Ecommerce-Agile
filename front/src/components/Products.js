import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { isAuth } from './security'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'




export default class Products extends Component {


    constructor() {
        super();
        this.state = {
            items: [],
            new_product_button: isAuth() ? <NProduct /> : '',
        }
    }
    componentWillMount() {
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/products',
        }).then(res => {
            console.log(res);
            this.setState({ items: res.data });
            console.log(this.state.items);
        })
    }

    render() {
        if (this.state.items.length <= 0) {
            return (
                <div className="sweet-loading">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                </div>
            )
        } else {

            return (
                <div>
                    <h1>List item</h1>
                    {this.state.new_product_button}
                    <div className="list">
                        {this.state.items.map((e, index) => {
                            return (
                                <div id={index}>
                                    <Card>
                                        <img src="https://picsum.photos/300/400" alt="Je savais pas quoi mettre" />
                                        <CardBody>
                                            <CardTitle>{e.title}</CardTitle>
                                            <CardSubtitle>Prix: {e.prix}</CardSubtitle>
                                            <CardText>{e.description}</CardText>
                                            <Link to={"/product/" + e.id}>
                                                En savoir +
                                            </Link>
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            )
        }
    }
}

function NProduct() {
    return (
        <Link to={"/add/product"}>
            <Button>Ajouter un article</Button>
        </Link>
    )
}