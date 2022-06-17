import loginImg from "../assets/img/LoginSide.svg";
function Login() {
  return (
    <div className="login">
      <div className="loginImg">
        <img src={loginImg} alt="loginimage" />
      </div>
      <div className="loginInputs"></div>
    </div>
  );
}

export default Login;
