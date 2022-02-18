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
  const [selectedItems, setSelectedItems] = useState([]);
  const [addNewCategory, setNewCategory] = useState([]);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [remove,setRemove] = useState(false);


  const [count, setCount] = useState(0)
  const [state, setState] = useState(0)
  const [finalProduct, setFinalProduct] = useState([])
  const [containerCount, setContainerCount] = useState(1)
  const [addCount, setAddCount] = useState(0)
  const [removeCount, setRemoveCount] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState([])
  const [categoryNumber, setCategoryNumber] = useState(1)


  const { isLoading, data, isFetched, isFetching, ...query } =
    useQuery("products", fetchProducts, {
      retry: false,
      select: (data) => data.data,
    });
  // console.log(data);
  // console.log(query);

  const addProducts = () => {
    if(!isButtonClicked || !addNewCategory.length) return;

    return (
      <>
        <div className="container" id="moveProduct" >
          <ul data-role="listview" style={{ textAlign: "start" }}>
            {addNewCategory.map((item) => (
              <div className="DIV" id="mySelect">
                <input type="checkbox" className={`form-check-input border border-black `}
                  onClick={(e) => clickInputBox(e, item, true)}
                  key={item.id} />
                <Link style={{ paddingLeft: 13, textDecoration: "none ", color: "black" }}
                  to={`/products/${item.id}`}>
                  {item.title}
                </Link>
              </div>
            )).slice(0, 10)}
          </ul>
        </div>
      </>
    )
  }

  const removeProducts = () => {
    console.log('remove products')

  }

  const clickInputBox = (e, item, fromBucket = false) => {
    if (e.target.checked) {
        const newSelectedItems = [...selectedItems];
        newSelectedItems.push(item);
        setSelectedItems(newSelectedItems);
        setNewCategory(newSelectedItems);
   
    } else {
     
        const alreadySelectedItems = [...selectedItems];
        const filteredItems = alreadySelectedItems.filter((el) => el.id !== item.id);
        setSelectedItems(filteredItems);
      }

  }

  const addCategory = () => {
    console.log('add category')
  }

  const removeCategory = () => {
    console.log('remove category')

  }



  if (isLoading) {
    return <LoadingComponent />;
  }
  console.log(selectedItems)

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
                  {data?.filter((item) => !finalProduct?.includes(item.id)).map((item) => (
                    <div id="mySelect" className="DIV">
                      <input type="checkbox" className={`form-check-input border border-black `}
                        onClick={(e) => clickInputBox(e, item)} />
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
            [...Array(containerCount)].map(item =>
              <>
                <div className="card border-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <BiCategoryAlt /> Category {categoryNumber}
                    </h5>
                    <div className='my-5'>
                      <svg className={`${props.isFavorite === true ? 'heart' : ''}`} width={'20px'} height={'20px'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <div className="card-text text-muted">Select products to add here.
                      </div>
                    </div>
                    {addProducts()}
                    <div className='row'>
                      <div className='col'>
                        <Button id="addProduct" 
                        variant="secondary" 
                        style={{ margin: "5px" }}
                        onClick={() => setButtonClicked(true)}
                        >
                          Add {selectedItems.length === 0 ? "" : selectedItems.length} Products
                        </Button>
                        <Button id="removeProduct" variant="secondary"
                          onClick={() => setRemove(true)}
                        >
                          Remove  Products
                        </Button>
                      </div>
                      <div className='col-sm-4'>
                        <Button id="removeCategory" variant="secondary" style={{ margin: "5px" }}
                          onClick={() => removeCategory()}
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
            id="BtnAdd"
            variant="primary"
            type='submit'
            size="lg"
            style={{ width: "670px", marginTop: "10px" }}
            onClick={() => addCategory()}
          >
            Add Category
          </Button>
        </div>
        <div className="col-sm-6 my-3">
          <div className="card border border-primary">
            <div className="card-body">
              <div className='review'>
                <h5 className="card-title" style={{ color: "#074EE8" }}>
                  <FiSave /> Review
                </h5>
                <div className="card-text" >
                  <h5><b>Available Products:
                    {data?.length - selectedProduct?.length}</b></h5>
                  <small>Categories: {categoryNumber} </small>
                  <br />
                  <small>Category {categoryNumber} : {addCount}  products</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InitialScreen;