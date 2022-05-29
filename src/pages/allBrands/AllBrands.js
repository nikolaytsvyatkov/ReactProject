import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import brandsArray from '../../brands.json';
import styles from './allbrands.module.css';
import BrandTable from '../../components/BrandTable';
import NavBarComp from '../../components/NavBarComp';

export default class AllBrands extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: []
        };
    }

    componentDidMount() {
        // fetching from api 
        fetch('http://localhost:8080/api/v1/brands')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({brands: data})
        })
       
    }

    render() {
        const { brands } = this.state;

        return (
            <div>
                <NavBarComp />
                <div className={styles.container}>
                    <h2 className="text-center text-white m-3">All Brands</h2>
                    <div className='row mb-4 d-flex justify-content-around'>
                        {brands.map(brand => {
                            return <BrandTable brand={brand} key={brand.id} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

