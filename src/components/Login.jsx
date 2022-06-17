import loginImg from "../assets/img/LoginSide.svg";
function Login() {
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
            <input type={"email"} placeholder={"Please enter your email"} />
            <input
              type={"password"}
              placeholder={"Please enter your password"}
            />
            <button className="btn-blue"> Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
