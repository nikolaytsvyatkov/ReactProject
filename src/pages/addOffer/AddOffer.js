import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from '../../components/NavBarComp';
import styles from './addOffer.module.css'


export default class AddOffer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //offers : []
        };
    }

    componentDidMount() {
        // fetching from api 
        this.setState({
            //offers: offerArray //result from query fetch....
        })
    }

    render() {
        return (
            <div>
                <NavBarComp />
                <div className={styles.container}>
                    <h2 className="text-center text-white mb-3">Upload Offer</h2>
                    <form 
                        className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center">
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <input type="text"  id="id" name="id"
                                    className="form-control" title="Article Id" hidden />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label className="text-white font-weight-bold" for="category">Vehicle Category</label>
                                <select  id="category" className="form-control">
                                    <option>
                                        Vehicle Category
                                    </option>
                                </select>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label className="text-center text-white font-weight-bold" for="model">Model</label>
                                <select name="model" id="model" className="form-control">
                                    <option value="">- Select a model -</option>
                                    <optgroup /*th:each="brand : ${brands}" th:label="${brand.getName()}"*/>
                                        <option 
                                            /*th:text="${model.getName()}"
                                            th:value="${model.getId()}"
                                            th:selected="${offer.model != null and offer.model.getId() == model.getId()}"*/>Model
                                        </option>
                                    </optgroup>
                                </select>
                                <p  className="errors alert alert-danger">
                                    Vechicle model is required.
                                </p>
                            </div>
                            <div className="w-100 col-md-6 mb-3">
                                <label for="price" className="text-white font-weight-bold">Price</label>
                                <input id="price" type="number" min="0" step="100" className="form-control"
                                    placeholder="Suggested price" />
                                <p className="errors alert alert-danger">
                                    Suggested price is required.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label className="text-center text-white font-weight-bold" for="engine">Engine</label>
                                <select name="engine" id="engine" className="form-control">
                                    <option value="">- Select engine type -</option>
                                    <option /*th:each="engine : ${T(com.example.mobileapp.model.enums.EngineType).values()}"
                                        th:text="${engine}"
                                        th:value="${engine}"
                                        th:selected="${offer.engine == engine}"*/>
                                        Engine type
                                    </option>
                                </select>
                                <p className="errors alert alert-danger">
                                    Engine type is required.
                                </p>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label className="text-center text-white font-weight-bold" for="transmission">Transmission</label>
                                <select id="transmission" name="transmission" className="form-control">
                                    <option value="">- Select transmission type -</option>
                                    <option /*th:each="transmission : ${T(com.example.mobileapp.model.enums.TransmissionType).values()}"
                                        th:text="${transmission}"
                                        th:value="${transmission}"
                                        th:selected="${transmission == offer.transmission}</select>"*/> Transmission type
                                    </option>
                                </select>
                                <p 
                                    className="errors alert alert-danger">
                                    Transmission type is required.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label for="year" className="text-white font-weight-bold">Year</label>
                                <input t id="year" type="number" min="1900" max="2099" step="1" className="form-control"
                                    placeholder="Manufacturing year" />
                                <p  className="errors alert alert-danger">
                                    Manufacturing year is required.
                                </p>
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label for="mileage" className="text-white font-weight-bold">Mileage</label>
                                <input id="mileage" type="number" min="0" max="900000" step="1000"
                                    className="form-control"
                                    placeholder="Mileage in kilometers" />
                                <p className="errors alert alert-danger">
                                    Mileage in kilometers is required.
                                </p>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="text-white font-weight-bold" for="description">Description</label>
                            <textarea  id="description" type="textarea" className="form-control" rows="3"
                                placeholder="Description"></textarea>
                            <p  className="errors alert alert-danger">
                                Description is required.
                            </p>
                        </div>
                        <div className="form-group">
                            <label className="text-white font-weight-bold" for="imageUrl">Image URL</label>
                            <input  id="imageUrl" type="url" className="form-control"
                                placeholder="Put vehicle image URL here" />
                            <p  className="errors alert alert-danger">
                                Vehicle image URL is required.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col col-md-4">
                                <div className="button-holder d-flex mb-3">
                                    <input className="btn btn-info btn-lg" value="Submit Offer" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

