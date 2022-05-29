import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentsCss/custom.css';

function Card({offer}) {
    return(
            <div className="offer card col-sm-6 col-md-3  col-lg-2 m-1 p-0">
                <div className="card-img-top-wrapper">
                    <img className="card-img-top" src={offer.imgUrl} alt="Car image"/>
                </div>
                <div className="card-body pb-1">
                    <h5 className="card-title">
                        Offer year Brand name Model name</h5>
                </div>
                <ul className="offer-details list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="card-text"><span> {offer.mileage}  Mileage</span></div>
                        <div className="card-text"><span> {offer.price}</span></div>
                        <div className="card-text"><span> {offer.engine}</span></div>
                        <div className="card-text"><span> {offer.transmisson}</span></div>
                    </li>
                </ul>
                <div className="card-body">
                    <a className="card-link">Details</a>
                </div>
            </div>);
}

export default Card;