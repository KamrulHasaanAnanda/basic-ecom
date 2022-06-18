import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCatogoryValue } from "../redux/action/ProductAction";

function ProductSorting({ allProducts }) {
  const [valueNow, setvalueNow] = useState();

  let dispatch = useDispatch();
  // console.log("allProducts :>> ", allProducts);
  let sortFunc = (value) => {
    setvalueNow(value);
  };
  let category = "";
  let catValue = [];
  if (allProducts.length > 0) {
    category = allProducts.map((product) => {
      return catValue.push(product.category);
    });
  }
  if (catValue.length > 0) {
    category = [...new Set(catValue)].map((p) => (
      <li key={`${p}`} onClick={() => dispatch(getCatogoryValue(p))}>
        <a className="dropdown-item">{p}</a>
      </li>
    ));
  }
  // console.log("catValue :>> ", [...new Set(catValue)]);

  return (
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
            <a
              className="dropdown-item"
              onClick={() => sortFunc("PriceA")}
              href="#"
            >
              Price(Accending)
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => sortFunc("PriceD")}
              href="#"
            >
              Price(Descending )
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
            <a
              className="dropdown-item"
              onClick={() => dispatch(getCatogoryValue("no"))}
            >
              No category
            </a>
          </li>
          {category}
        </ul>
      </div>
    </div>
  );
}

export default ProductSorting;
