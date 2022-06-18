import { useState } from "react";

function ProductSorting() {
  const [valueNow, setvalueNow] = useState();

  let sortFunc = (value) => {
    setvalueNow(value);
  };
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
  );
}

export default ProductSorting;
