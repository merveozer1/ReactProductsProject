import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorComponent, LoadingComponent } from "./helperComponents";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*

  fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });

  */

  useEffect(() => {
    // const URL = "/products";
    const BASE_URL = "https://fakestoreapi.com";
    axios.get(`${BASE_URL}/products`);

    const BASE_AXIOS = axios.create({ baseURL: "https://fakestoreapi.com" });
    BASE_AXIOS.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  console.log("isLoading:::", isLoading);
  console.log("products:::", products);
  console.log("error:::", error);

  if (error) {
    return <ErrorComponent message={error} />;
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
