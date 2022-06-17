import { useReducer } from "react";
import loginImg from "../assets/img/RegisterSide.svg";
import AuthServices from "../services/Authservices";
import { toastifyAlertError, toastifyAlertSuccess } from "../utils/alerts";

function Register() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
      confirm_password: "",
    }
  );
  let inputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ [name]: value });
  };
  let inputSubmit = async (e) => {
    e.preventDefault();
    if (state.password === state.confirm_password) {
      let res = await AuthServices.register(state);
      if (res.status === 201) {
        toastifyAlertSuccess("Registration complete", "top-center");
      } else if (res.status === 400) toastifyAlertError(res.data, "top-center");
      console.log("res :>> ", res);
    } else {
      console.log("e :>> ", e);

      toastifyAlertError("Passwords don't match", "top-center");
    }
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
            <h5>Create your account</h5>
          </div>
          <div className="inputs">
            <input
              type={"email"}
              name="email"
              onChange={inputChange}
              placeholder={"Email"}
            />
            <input
              type={"password"}
              name="password"
              onChange={inputChange}
              placeholder={"Password"}
            />
            <input
              type={"password"}
              name="confirm_password"
              onChange={inputChange}
              placeholder={"Confirmed password"}
            />
            <button className="btn-blue" onClick={inputSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
