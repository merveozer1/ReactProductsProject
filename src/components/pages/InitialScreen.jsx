import React from 'react';
import { BiCube } from 'react-icons/bi';
import { FiSave } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import { CheckboxContextProvider } from '../../context/CheckboxContext';
import Checkbox from '../Checkbox'
import QueryProducts from './QueryProducts';
// import AddRemoveProduct from './AddRemoveProduct';

function InitialScreen(props) {

  return (
    <>
      <div className="row my-3">
        <div className="col-sm-6">
          <div className="card border-3 border-warning">
            <div className="card-body">
              <h5 className="card-title">
                <BiCube /> Available Products
              </h5>
              <p className="card-text">
                < QueryProducts />
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 ">
          <div className="card border-3 border-primary">
            <div className="card-body">
              <h5 className="card-title">
                <BiCategoryAlt /> Category
              </h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
          <Button id="Btn" variant="primary" size="lg" style={{ width: "698px", marginTop: "10px" }} >
            Add Category
          </Button>
        </div>

        <div className="col-sm-6 my-3">
          <div className="card border-3 border-danger">
            <div className="card-body">
              <h5 className="card-title">
                <FiSave /> Review
              </h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InitialScreen