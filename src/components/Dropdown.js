import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: []
        };
    }

    componentDidMount() {
        // fetching from api 
        this.setState({
            //offers: offerArray //result from query fetch....
        })
    }

    render() {
        const { offers } = this.state;

        return (
            <div>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </div>
        );
    }
}

