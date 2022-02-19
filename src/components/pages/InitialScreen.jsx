import React, { useEffect, useState } from 'react';
import { BiCube } from 'react-icons/bi';
import { FiSave } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import "../styles/buttons.css"
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { LoadingComponent } from "../helperComponents"
import { fetchProducts } from "../../api";


function InitialScreen(props) {
  const { isLoading, data = [], isFetched } = useQuery("products", fetchProducts, {
    retry: false,
    select: (data) => data.data,
  });

  const [appState, setAppState] = useState({ availableProducts: [], selectedItems: [], containers: [{ name: 1, unfavItems: [], favItems: [] }] });

  useEffect(() => {
    setAppState({ ...appState, availableProducts: [...data] })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetched])


  const removeProducts = (index) => {
    const newState = { ...appState };

    const newFavItems = newState.containers[index].favItems.filter(item => !newState.containers[index].unfavItems.includes(item));
    newState.containers[index].favItems = [...newFavItems];
    newState.availableProducts = [...newState.availableProducts, ...newState.containers[index].unfavItems];
    newState.containers[index].unfavItems = [];
    setAppState(newState);
  }

  const addProducts = (index) => {
    const newState = { ...appState };

    for (const product of appState.selectedItems) {
      newState.containers[index].favItems.push(product);
      newState.availableProducts = newState.availableProducts.filter(item => product.id !== item.id);
    }

    newState.selectedItems = [];

    setAppState(newState);
  }


  const onSelectedItemChange = (e, item) => {
    if (e.target.checked) {
      const newSelectedItems = [...appState.selectedItems, item];
      setAppState({ ...appState, selectedItems: newSelectedItems });
    } else {
      const selectedItems = [...appState.selectedItems];
      const filteredItems = selectedItems.filter((el) => el.id !== item.id);
      setAppState({ ...appState, selectedItems: filteredItems });
    }
  }

  const onFavItemChange = (e, item, index) => {
    if (e.target.checked) {
      const containers = [...appState.containers];
      containers[index].unfavItems.push(item);
      setAppState({ ...appState, containers });
    } else {
      const containers = [...appState.containers];
      containers[index].unfavItems = containers[index].unfavItems.filter((el) => el.id !== item.id);
      setAppState({ ...appState, containers });
    }
  }

  const addCategory = () => {
    const containers = [...appState.containers];
    containers.push({ unfavItems: [], favItems: [], name: containers[containers.length - 1].name + 1 });
    setAppState({ ...appState, containers });
  }

  const removeCategory = (index) => {
    if (appState.containers.length < 2) return;

    const newState = { ...appState };

    newState.availableProducts = [...newState.availableProducts, ...newState.containers[index].favItems];
    newState.containers.splice(index, 1);

    setAppState(newState);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  console.log("appState", appState);

  return (
    <>
      <div className="row my-3">
        <div className="col-sm-6">
          <div className="card border-3">
            <div className="card-body">
              <h5 className="card-title">
                <BiCube /> Available Products
              </h5>
              <div className="card-text">
                <ul id="available-products" data-role="listview" style={{ textAlign: "start" }}>
                  {appState.availableProducts.map((item) => (
                    <div key={item.id} id="mySelect" className="selectProduct">
                      <input type="checkbox" className={`form-check-input border border-black `}
                        onChange={(e) => onSelectedItemChange(e, item)} />
                      <Link style={{ paddingLeft: 13, textDecoration: "none ", color: "black" }}
                        to={`/products/${item.id}`}>
                        {item.title}
                      </Link>
                    </div>
                  )).slice(0, 10)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 ">
          {
            appState.containers.map((container, index) =>
              <>
                <div className="card border-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <BiCategoryAlt /> Category {container.name}
                    </h5>
                    <div className='my-5'>
                      {container.favItems.length === 0 ?
                        <div>
                          <svg width={'20px'} height={'20px'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <div className="card-text text-muted">Select products to add here.</div></div> : <div></div>}
                      <div>
                        <div className="container" id="moveProduct" >
                          <ul data-role="listview" style={{ textAlign: "start" }}>
                            {container.favItems.map((item) => (
                              <div className="DIV" id="mySelect">
                                <input type="checkbox" className={`form-check-input border border-black `}
                                  onChange={(e) => onFavItemChange(e, item, index)}
                                  key={item.id} />
                                <Link style={{ paddingLeft: 13, textDecoration: "none ", color: "black" }}
                                  to={`/products/${item.id}`}>
                                  {item.title}
                                </Link>
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
                          Add {appState.selectedItems.length === 0 ? "" : appState.selectedItems.length} Products
                        </Button>
                        <Button id="removeProduct"
                          variant={container.unfavItems.length === 0 ? "#EEEEEE" : "primary"}
                          onClick={() => removeProducts(index)}
                        >
                          Remove {container.unfavItems.length === 0 ? "" : container.unfavItems.length} Products
                        </Button>
                      </div>
                      <div className='col-sm-4'>
                        <Button id="removeCategory"
                          variant={appState.containers.length !== 1 ? "primary" : "#EEEEEE"}
                          onClick={() => removeCategory(index)}
                        >
                          Remove Category
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )} 
          <Button 
            style={{ width: "670px", marginTop: "10px" }}
            id="addCategory"
            variant="primary"
            type='submit'
            onClick={() => addCategory()}
          >
            Add Category
          </Button>
        </div>
      </div>
      <div className="col-sm-6 my-3">
        <div className="card border border-primary">
          <div className="card-body">
            <div className='review'>
              <h5 className="card-title" style={{ color: "#074EE8" }}>
                <FiSave /> Review
              </h5>
              <div className="card-text" >
                <h5>
                  <b>Available Products:</b>
                  {appState.selectedItems.availableProducts}
                </h5>
                <small>Categories: { } </small>
                <br />
                <small>Category { } : { }  products</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InitialScreen;


