import { Link } from "react-router-dom";

function ProductsShow({ p }) {
  return (
    <div className="single" key={`${p.id}`}>
      <div className="image">
        <img src={p.image} alt="" />
      </div>
      <div className="texts">
        <h5>{p.name}</h5>
        <h4>Category:{p.category}</h4>
        <h4>Price:{p.price}</h4>
      </div>
      <div className="my-4 btns">
        <Link to={`${p.id}`}>
          <button className="btn-blue big">Show</button>
        </Link>
        <button className="btn-black">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductsShow;
