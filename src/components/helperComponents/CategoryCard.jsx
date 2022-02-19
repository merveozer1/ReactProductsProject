import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { removeCategoryButtonText, categoryText, addText, productsText, removeText } from "../../constants";

export const CategoryCard = (props) => {
	const {removeCategory, onFavItemChange, addProducts, removeProducts, container, index, appState } = props;

	return (
		<div className="card">
			<div className="categoryCard">
				<h5 className="card-title">
				<h5 className='titles'><BiCategoryAlt /> {categoryText} {container.name} </h5>
			</h5>
				<div className='icon'>
					{container.favItems.length === 0 ?
						<div>
							<svg width={'20px'} height={'20px'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
							<div className="selectAnyProduct">Select products to add here.</div></div> : <div></div>}
					<div>
						<div className="container">
							<ul data-role="listview" id="available-products">
								{container.favItems.map((item) => (
									<div key={item.id} className="container-wrapper">
										<input type="checkbox" id="checkbox" className={`form-check-input border border-black `}
											onChange={(e) => onFavItemChange(e, item, index)}
											
										/>
										<Link className="productLink" to={`/products/${item.id}`}> {item.title}</Link>
									</div>
								)).slice(0, 10)}
							</ul>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<Button id="addProduct"
							variant={appState.selectedItems.length === 0 ? "#EEEEEE" : "primary"}
							onClick={() => addProducts(index)}
						>
							{addText} {appState.selectedItems.length === 0 ? "" : appState.selectedItems.length} {productsText}
						</Button>
						<Button id="removeProduct"
							variant={container.unfavItems.length === 0 ? "#EEEEEE" : "primary"}
							onClick={() => removeProducts(index)}
						>
							{removeText} {container.unfavItems.length === 0 ? "" : container.unfavItems.length} {productsText}
						</Button>
					</div>
					<div className='col-sm-4'>
						<Button id="removeCategory"
							variant={appState.containers.length !== 1 ? "primary" : "#EEEEEE"}
							onClick={() => removeCategory(index)}
						>
							{removeCategoryButtonText}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}