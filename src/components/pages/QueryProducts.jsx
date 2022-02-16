import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { ErrorComponent, LoadingComponent } from "../helperComponents"
import { CheckboxContextProvider } from '../../context/CheckboxContext';
import Checkbox from '../Checkbox'
import { fetchProducts } from "../../api";
import AddRemoveProduct from "./AddRemoveProduct";

const QueryProducts = (props) => {
    const { isLoading, isError, error, data, isFetched, isFetching, ...query } =
        useQuery("products", fetchProducts, {
            retry: false,
            select: (data) => data.data,
        });

    console.log(data);
    console.log(query);

    if (isError) {
        return <ErrorComponent message={error.message} />;
    }

    if (isLoading) {
        return <LoadingComponent />;
    }

    return (
        <>
            {/* <CheckboxSliderContextProvider > */}
                {/* <div className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex ps-4 "> */}
                    <ul data-role="listview" style={{textAlign:"start"}}>
                        {data?.map((item) => (
                            <div>
                             
                            <input type="checkbox" className={`form-check-input border border-warning `} key={item.id}/>
                                <Link style={{paddingLeft: 13, textDecoration: "none ", color:"black" }} to={`/products/${item.id}`}>
                                    {item.title} 
                                </Link>
                                </div>
                        )).slice(0, 10)}
                    </ul>
                 
            {/* </CheckboxSliderContextProvider> */}

        </>
    );
};

export default QueryProducts;
