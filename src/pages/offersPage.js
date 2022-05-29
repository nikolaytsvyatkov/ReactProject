import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentsCss/custom.css';
import NavBarComp from "../components/NavBarComp";
import Cards from "../components/Cards";

function OffersPage() {
    return (
        <div>
            <NavBarComp />
            <div class="container-fluid">
                <h2 class="text-center text-white mt-5">All Offers</h2>
                <Cards/>
            </div>
        </div>

    );
}

export default OffersPage;