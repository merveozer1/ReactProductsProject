import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import { LoadingComponent } from "../helperComponents"

import { fetchProducts } from "../../api";
import { Button } from 'react-bootstrap';

const QueryProducts = (props) => {
    const [count, setCount] = useState(0)
    const { isLoading, data, isFetched, isFetching, ...query } =
        useQuery("products", fetchProducts, {
            retry: false,
            select: (data) => data.data,
        });
    console.log(data);
    console.log(query);

    

    if (isLoading) {
        return <LoadingComponent />;
    }
    return (
        <>
            {/* <CheckboxSliderContextProvider > */}
            {/* <div className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex ps-4 "> */}
            <ul data-role="listview" style={{ textAlign: "start" }}>
                {data?.map((item) => (
                    <div>
                        
                            <input type="checkbox" className={`form-check-input border border-black `}
                                onClick={() => setCount(prev => prev + 1)} key={item.id} />
                            
                        <Link style={{ paddingLeft: 13, textDecoration: "none ", color: "black" }}
                            to={`/products/${item.id}`}>
                            {item.title}
                        </Link>
                    </div>
                )).slice(0, 10)}
            </ul>
            <Button>    add {count}
                        </Button>
            {/* </CheckboxSliderContextProvider> */}
        </>
    );
};

export default QueryProducts;
