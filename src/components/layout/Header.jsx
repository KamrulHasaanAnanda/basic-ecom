import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cart from "../../assets/img/Cart.svg";
import { getCartValue } from "../../redux/action/ProductAction";
import { toastifyAlertSuccess } from "../../utils/alerts";
import { getCart, getUser } from "../../utils/functions";

function Header() {
  const { authenticated } = useSelector((state) => state.authValue);
  let dispatch = useDispatch();

  const { cartValue } = useSelector((state) => state.productValue);
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      cartNumber: 0,
      cartShow: false,
      cartValues: "",
    }
  );
  // console.log("cartValue :>> ", cartValue);

  let user = JSON.parse(getUser());
  let carts = getCart().length || 0;
  let cartValues = getCart();
  // console.log("cartValues :>> ", cartValues);

  let cartPageData = "";
  if (cartValues?.length > 0) {
    cartPageData = cartValues.map((c) => (
      <div className="cart-page">
        <div className="cart-image">
          <img src={c.product_image} alt="" />
        </div>
        <div className="texts">
          <h5>Name:{c.product_name}</h5>
          <div className="d-flex justify-content-center">
            <h5 className="mx-3">Quantity:{c.quantity}</h5>
            <h5>Price:{c.price}</h5>
          </div>
        </div>
      </div>
    ));
  }

  let saveCart = () => {
    toastifyAlertSuccess("Successfully bought products", "top-center");
    dispatch(getCartValue(true));
    window.localStorage.removeItem("ecart");
    setState({ cartShow: false });
  };

  useEffect(() => {
    setState({ cartNumber: carts });
  }, [cartValue, carts]);
  // console.log("carts :>> ", carts);

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
            <div
              className="cart"
              onClick={() => setState({ cartShow: !state.cartShow })}
            >
              <img src={cart} alt="" />
              <p className="cart_number">{state.cartNumber}</p>
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
      <div
        className={
          state.cartShow ? "fixed-cart fixed-cart-show " : "fixed-cart"
        }
      >
        <div className="cross" onClick={() => setState({ cartShow: false })}>
          <p>X</p>
        </div>
        {cartPageData}
        <div className="my-3 text-center">
          <button className="btn-blue" onClick={saveCart}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
