import loginImg from "../assets/img/RegisterSide.svg";

function Register() {
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
            <input type={"email"} placeholder={"Email"} />
            <input type={"password"} placeholder={"Password"} />
            <input type={"password"} placeholder={"Confirmed password"} />
            <button className="btn-blue"> Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
