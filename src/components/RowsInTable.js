import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import offerArray from '../data.json';
import Card from './Card.js'

export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: []
        };
    }

    componentDidMount() {
        // fetching from api 
        this.setState({
            offers: offerArray //result from query fetch....
        })
    }

    render() {
        const { offers } = this.state;

        return (
            <div className="offers row mx-auto d-flex flex-row justify-content-center">
                {offers.map(offer => {
                    return <Card offer={offer} key={offer.id} />
                })}
            </div>
        );
    }
}

