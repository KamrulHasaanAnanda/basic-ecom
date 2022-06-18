import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFunction } from "../redux/action/ProductAction";
import ProductsShow from "./products/ProductsShow";
import ProductSorting from "./ProductSorting";

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
    products = allProducts.map((p) => <ProductsShow p={p} />);
  } else if (allProducts.length > 0 && valueNow) {
    products = allProducts
      .filter((p) => value(p.name.toUpperCase(), search.toUpperCase()))
      .map((p) => <ProductsShow p={p} />);
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
        <ProductSorting />
      </div>
      <div className="products-show">{products}</div>
    </div>
  );
}

export default ProductBody;
