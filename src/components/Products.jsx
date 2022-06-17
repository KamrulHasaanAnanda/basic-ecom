import productImg from "../assets/img/ProductImg.svg";
import ProductBody from "./ProductBody";
function Products() {
  // console.log("authenticated :>> ", authenticated);
  return (
    <div className="productDiv">
      <div className="banner">
        <div className="leftSide">
          <h3>FreshenUp Your Looks with ECOM</h3>
          <button className="btn-black big">Shop now</button>
        </div>
        <div className="rightSide">
          <img src={productImg} alt="img" />
        </div>
      </div>
      <ProductBody />
    </div>
  );
}

export default Products;
