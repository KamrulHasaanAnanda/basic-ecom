import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductFunction } from "../redux/action/ProductAction";

function ProductBody() {
  const { allProducts } = useSelector((state) => state.productValue);
  const [search, setsearch] = useState();
  const [valueNow, setvalueNow] = useState();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductFunction());
  }, [dispatch]);

  let searchFilter = (e) => {
    setsearch(e.target.value);
    setvalueNow("search");
  };

  let value = (searchBy, value) => {
    let val = searchBy.includes(value.toUpperCase());
    return val;
  };
  let products = "";
  if (allProducts.length > 0 && !valueNow) {
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
          <Link to={`${p.id}`}>
            <button className="btn-blue big">Show</button>
          </Link>
          <button className="btn-black">Add to cart</button>
        </div>
      </div>
    ));
  } else if (allProducts.length > 0 && valueNow) {
    products = allProducts
      .filter((p) => value(p.name.toUpperCase(), search.toUpperCase()))
      .map((p) => (
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
            <Link to={`${p.id}`}>
              <button className="btn-blue big">Show</button>
            </Link>
            <button className="btn-black">Add to cart</button>
          </div>
        </div>
      ));
  }
  return (
    <div className="product-body">
      <div className="heading">
        <h3>All products</h3>
        <div className="input-search">
          <input
            type={"search"}
            placeholder="Search product by name"
            name="search"
            onChange={(e) => searchFilter(e)}
          />
        </div>
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
