import QueryProducts from "./components/pages/QueryProducts"
import SingleProduct from "./components/pages/SingleProduct"

 const routes = [
  {name: "Products", pathname: "/query-products", element: QueryProducts},
  {name: "ProductDetail", pathname: "/products/:productId", element: SingleProduct},
]

export default routes;