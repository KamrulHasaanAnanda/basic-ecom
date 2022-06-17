import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFunction } from "../redux/action/ProductAction";
function ProductBody() {
  const { allProducts } = useSelector((state) => state.productValue);
  let dispatch = useDispatch();
  //   console.log("allProducts :>> ", allProducts);
  useEffect(() => {
    dispatch(getAllProductFunction());
  }, [dispatch]);

  let products = "";
  if (allProducts.length > 0) {
    products = allProducts.map((p) => (
      <div className="single" key={`${p.id}`}>
        <div className="image">
          <img src={p.image} alt="" />
        </div>
        <div className="texts">
          <h5>{p.name}</h5>
          <h4>Category:{p.category}</h4>
          <h4>Price{p.price}</h4>
        </div>
        <div className="my-4 btns">
          <button className="btn-blue big">Show</button>
          <button className="btn-black">Add to cart</button>
        </div>
      </div>
    ));
  }
  return (
    <div className="product-body">
      <div className="heading">
        <h3>All products</h3>
        <div className="sortings">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Name
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Price
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by Category
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="products-show">{products}</div>
    </div>
  );
}

export default ProductBody;
