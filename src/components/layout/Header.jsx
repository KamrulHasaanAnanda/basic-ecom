import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cart from "../../assets/img/Cart.svg";
import { getUser } from "../../utils/functions";

function Header() {
  const { authenticated } = useSelector((state) => state.authValue);

  let user = JSON.parse(getUser());
  console.log("user :>> ", user);

  return (
    <div className="header">
      <div className="logo">
        <h3>ECOM</h3>
      </div>
      <div className="links">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/"}>
            <li>Product</li>
          </Link>
          <Link to={"/about-us"}>
            <li>About us</li>
          </Link>
        </ul>
      </div>
      <div className="btn-head">
        {authenticated ? (
          <>
            <div className="cart">
              <img src={cart} alt="" />
            </div>
            <div className="user">
              <h3>{user.email.charAt(0)}</h3>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn-black">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
