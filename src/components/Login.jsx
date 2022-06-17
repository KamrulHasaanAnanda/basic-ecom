import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/img/LoginSide.svg";
import {
  authenticatedFunction,
  setUserFunction,
} from "../redux/action/AuthAction";
import AuthServices from "../services/Authservices";
import { toastifyAlertError, toastifyAlertSuccess } from "../utils/alerts";
import { setToken, setUser } from "../utils/functions";
function Login() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
    }
  );
  let inputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ [name]: value });
  };
  let inputSubmit = async (e) => {
    e.preventDefault();
    let res = await AuthServices.login(state);
    // console.log("res", res);
    if (res.status === 200) {
      toastifyAlertSuccess("Successfully logged in", "top-center");
      setToken(res.data.accessToken);
      dispatch(authenticatedFunction(true));
      dispatch(setUserFunction(res.data.user));
      setUser(JSON.stringify(res.data.user));
      navigate("/");
    } else if (res.status === 400) toastifyAlertError(res.data, "top-center");
  };
  return (
    <div className="login">
      <div className="loginImgDiv">
        <div className="loginImg">
          <img src={loginImg} alt="loginimage" />
        </div>
      </div>
      <div className="loginInputs">
        <div className="itemsInput">
          <div className="texts">
            <h2>ECOM</h2>
            <h5>Welcome Back</h5>
            <p>Please enter your details</p>
          </div>
          <div className="inputs">
            <input
              type={"email"}
              name="email"
              onChange={inputChange}
              placeholder={"Please enter your email"}
            />
            <input
              type={"password"}
              name="password"
              onChange={inputChange}
              placeholder={"Please enter your password"}
            />
            <button className="btn-blue" onClick={inputSubmit}>
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
