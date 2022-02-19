import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleProduct } from "../../api"
import { LoadingComponent } from "../helperComponents"
import "../styles/buttons.css"

const SingleProduct = (props) => {
  const { productId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { isLoading, data, isFetched, isFetching, ...query } =
    useQuery(
      ["product", productId],

      () => fetchSingleProduct(productId),
      
      {
        retry: false,
        select: (data) => data.data,
      }
    );

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
    <small className="productDetail">Product Detail</small>
      <div className="grid-container">
        <h4>{data?.title}</h4>
        <img src={data?.image} className="productDetail" alt="product-detail"/>
        <div></div>
        <div>
          <h5>
            $ {data?.price}
          </h5>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
