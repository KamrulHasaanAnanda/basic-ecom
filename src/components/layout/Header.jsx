import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h3>ECOM</h3>
      </div>
      <div className="links">
        <ul>
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/product"}>
            <li>Product</li>
          </Link>
          <Link to={"/about-us"}>
            <li>About us</li>
          </Link>
        </ul>
      </div>
      <div className="btn-head">
        <button className="btn-black">Login</button>
      </div>
    </div>
  );
}

export default Header;
