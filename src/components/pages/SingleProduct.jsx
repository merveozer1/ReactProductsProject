import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSingleProduct } from "../../api"
import { LoadingComponent } from "../helperComponents"

const SingleProduct = (props) => {
  const { productId } = useParams();
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
      <h1>{data?.title}</h1>
      <img src={data?.image} alt="" style={{ width: "200px" }} />
      <div></div>
      <div>
        <h5>
        $ {data?.price}
        </h5>
        </div>
    </>
  );
};

export default SingleProduct;
