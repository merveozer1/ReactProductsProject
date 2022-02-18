import InitialScreen from "./components/pages/InitialScreen"
import SingleProduct from "./components/pages/SingleProduct"

 const routes = [
  {name: "Products", pathname: "/query-products", element: InitialScreen},
  {name: "ProductDetail", pathname: "/products/:productId", element: SingleProduct},
]

export default routes;