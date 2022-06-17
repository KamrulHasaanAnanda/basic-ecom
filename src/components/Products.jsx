import { useSelector } from "react-redux";
import productImg from "../assets/img/ProductImg.svg";
function Products() {
  const { authenticated } = useSelector((state) => state.authValue);
  console.log("authenticated :>> ", authenticated);
  return (
    <div className="productDiv">
      <div className="banner">
        <div className="leftSide">
          <h3>FreshenUp Your Looks with ECOM</h3>
          <button className="btn-black">Shop now</button>
        </div>
        <div className="rightSide">
          <div>
            <img src={productImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
