import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFunction } from "../redux/action/ProductAction";
import ProductsShow from "./products/ProductsShow";
import ProductSorting from "./ProductSorting";

function ProductBody() {
  const { allProducts, categorySort, priceSort } = useSelector(
    (state) => state.productValue
  );
  const [search, setsearch] = useState();
  // console.log("search :>> ", search);
  const [valueNow, setvalueNow] = useState([]);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductFunction());
    if (categorySort) {
      setvalueNow(categorySort);
    }
    if (priceSort) {
      setsearch();
    }
  }, [dispatch, categorySort, priceSort]);
  // console.log("valueNow :>> ", valueNow);
  let searchFilter = (e) => {
    setsearch(e.target.value);
    setvalueNow("search");
  };

  let value = (searchBy, value) => {
    let val = searchBy.includes(value.toUpperCase());
    return val;
  };
  let products = "";

  if (
    (allProducts.length > 0 && !valueNow.length && !priceSort.length) ||
    categorySort === "no"
  ) {
    console.log(" :>dsfs> ");
    products = allProducts.map((p) => (
      <div className="single" key={`${p.id}`}>
        <ProductsShow p={p} />
      </div>
    ));
  } else if (allProducts.length > 0 && valueNow === "search") {
    products = allProducts
      .filter((p) => value(p.name.toUpperCase(), search.toUpperCase()))
      .map((p) => (
        <div className="single" key={`${p.id}`}>
          <ProductsShow p={p} />
        </div>
      ));
  } else if (
    (allProducts.length > 0 && priceSort === "Accending") ||
    valueNow === "search"
  ) {
    let p = [...allProducts];
    let prods = p.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    products = prods.map((p) => (
      <div className="single" key={`${p.id}`}>
        <ProductsShow p={p} />
      </div>
    ));
  } else if (
    (allProducts.length > 0 && priceSort === "Descending") ||
    valueNow === "search"
  ) {
    let p = [...allProducts];
    let prods = p.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    products = prods.map((p) => (
      <div className="single" key={`${p.id}`}>
        <ProductsShow p={p} />
      </div>
    ));
  } else if (allProducts.length > 0 && valueNow !== "search" && categorySort) {
    products = allProducts
      .filter((p) => p.category === categorySort)
      .map((p) => (
        <div className="single" key={`${p.id}`}>
          <ProductsShow p={p} />
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
        <ProductSorting allProducts={allProducts} />
      </div>
      <div className="products-show">{products}</div>
    </div>
  );
}

export default ProductBody;
