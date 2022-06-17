import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductFunction } from "../redux/action/ProductAction";
function SingleProduct() {
  let { id } = useParams();
  const { singleProducts } = useSelector((state) => state.productValue);
  console.log("singleProducts :>> ", singleProducts);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProductFunction(id));
  }, [dispatch, id]);

  let singleProductShow = "";
  if (singleProducts.data) {
    singleProductShow = (
      <div className="single-product">
        <div className="image">
          <img src={singleProducts.data.image} alt="" />
        </div>
        <div className="texts">
          <h3>{singleProducts.data.name}</h3>
          <h4>Fresh Boneless Beef Premium</h4>
          <h5>
            Category:<span>{singleProducts.data.category}</span>
          </h5>
          <h5>
            Price:<span>{singleProducts.data.price}</span>
          </h5>
          <button className="btn-black my-4">Add to cart</button>
        </div>
      </div>
    );
  }
  return <>{singleProductShow}</>;
}

export default SingleProduct;
