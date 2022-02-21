import React from 'react';
import { BiCube } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { availableProductsText } from "../../constants";
import "../styles/buttons.css";

export const AvailableProducts = ({ appState, onSelectedItemChange }) => {
	return (
		<div className="availableProducts">
		<div className="card-body">
			<h5 className="card-title">
			<h5 className='titles'> <BiCube /> {availableProductsText} </h5>
			</h5>
			<div className="card-text">
				{appState.availableProducts.length ? <ul id="available-products" data-role="listview" >
					{appState.availableProducts.map((item) => (
						<div key={item.id} >
							<input type="checkbox" className={`form-check-input border border-black `}
								onChange={(e) => onSelectedItemChange(e, item)} />
							<Link className="productLink"
								to={`/products/${item.id}`}>
								{item.title}
							</Link>
						</div>
					)).slice(0, 10)}
				</ul> :
					<b className='outStock'>There are no products available. Thanks for your order!</b>
				}
			</div>
		</div>
		</div>
	)
};

