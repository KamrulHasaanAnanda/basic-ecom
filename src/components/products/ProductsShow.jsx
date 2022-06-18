import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCartValue } from "../../redux/action/ProductAction";
import { toastifyAlertSuccess } from "../../utils/alerts";
import { getCart, setCart } from "../../utils/functions";

function ProductsShow({ p }) {
  let dispatch = useDispatch();
  let addToCart = (product) => {
    let carts = getCart() || [];
    let quantity = 1;
    let cartNow = false;
    // console.log("cart :>> ", carts);
    carts.forEach((cart, index) => {
      dispatch(getCartValue(cart.quantity + quantity));
      if (cart?.product_id === product?.id) {
        cart.quantity = cart.quantity + quantity;
        carts[index] = cart;
        cartNow = true;
      }
    });

    if (!cartNow) {
      const cartData = {
        product_id: product?.id,
        product_name: product?.name,
        category: product?.category,
        quantity: quantity,
        price: product?.price,
        product_image: product?.image,
      };
      dispatch(getCartValue(true));
      carts.push(cartData);
    }
    setCart(carts);
    toastifyAlertSuccess("Added to cart", "top-center");
  };
  return (
    <>
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
        <button className="btn-black" onClick={() => addToCart(p)}>
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductsShow;
