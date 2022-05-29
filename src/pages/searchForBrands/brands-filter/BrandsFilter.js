import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from '../../../components/NavBarComp';
import PriceRangeSelector from '../../../components/PriceRangeSelector';
import Dropdown from '../../../components/Dropdown';

export default class BrandsFilter extends Component {

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
				<div className="mb-3">
					<input type="search" className="form-control" id="exampleFormControlInput1" placeholder="Search" />
				</div>

				<div className="mb-3 row">
					<label for="inputPassword" class="col-sm-2 col-form-label">Filters</label>
					<div class="col-sm-10">
						<button type="button" class="btn btn-primary btn-sm">Apply Filters</button>
					</div>
				</div>
				<PriceRangeSelector/>
				<Dropdown/>
				
			</div>
		);
	}
}

