import React, { useEffect, useState } from 'react';
import "../styles/buttons.css"
import { useQuery } from "react-query";
import { LoadingComponent } from "../helperComponents/LoadingComponent";
import { Reviews } from "../helperComponents/Reviews";
import { AvailableProducts } from "../helperComponents/AvailableProducts";
import { CategoryCard } from "../helperComponents/CategoryCard";
import { fetchProducts } from "../../api";
import { addCategoryButtonText } from "../../constants";

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

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
            <div className="cardStyle">
          <div className="card">
            <AvailableProducts appState={appState} onSelectedItemChange={onSelectedItemChange} />
          </div>
          </div>
          <Reviews appState={appState} />

        </div>
        <div className="col-sm-6 ">
          {
            appState.containers.map((container, index) =>
              <CategoryCard
                container={container}
                index={index}
                removeCategory={removeCategory}
                onFavItemChange={onFavItemChange}
                addProducts={addProducts}
                removeProducts={removeProducts}
                appState={appState}
              />
            )}
          <div className="addCategoryButton" onClick={() => addCategory()}> {addCategoryButtonText}</div>
        </div>
      </div>
    </>
  )
}

export default InitialScreen;


