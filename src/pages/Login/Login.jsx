import { useRef, useState } from "react";
import { Button, Links, MainLogo, SecondaryLogo } from "../../components";
import { useNavigate } from "react-router-dom";
import { CloseEyeIcon, EyeIcon } from "../../constants/icons.js";
import { handleEyeClick, handleLoginSubmit } from "./utils.js";
import "../styles.css";

const Login = () => {
  // navigate
  const navigate = useNavigate("");
  // ref
  const passwordRef = useRef(null);
  // states
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <main className="login-page | min-h-100 p-1 relative">
      <SecondaryLogo />
      <form
        action=""
        className="form | readable-container absolute-center p-1 br-5 flex-col gap-1"
        onSubmit={(e) => handleLoginSubmit(e)}
      >
        <MainLogo />
        <p className="fs-subheading text-center fw-500">Sign in</p>
        {/* Email */}
        <div className="form-group | relative">
          <input
            type="email"
            name="login-email"
            id="login-email"
            className="input"
            value={loginFormData.email}
            onChange={(e) =>
              setLoginFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <span className={loginFormData.email && "active"}>Email</span>
        </div>
        {/* Password */}
        <div className="form-group | relative">
          <input
            type="password"
            name="login-password"
            id="login-password"
            className="input"
            ref={passwordRef}
            value={loginFormData.password}
            onChange={(e) =>
              setLoginFormData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          <span className={loginFormData.password && "active"}>Password</span>
          <div
            onClick={() =>
              handleEyeClick(passwordRef, isShowPassword, setIsShowPassword)
            }
          >
            {loginFormData.password ? (
              isShowPassword && loginFormData.password ? (
                <CloseEyeIcon className="eye-icon" />
              ) : (
                <EyeIcon className="eye-icon" />
              )
            ) : null}
          </div>
        </div>
        {/* Login Button */}
        <Button>Login</Button>
        {/* Login Other Text */}
        <p
          className="form-other-text italic text-black-800 p-8 br-1 text-right"
          onClick={() => navigate("/register")}
        >
          {"Don't"} have an account?
        </p>
      </form>
      <Links />
    </main>
  );
};

export default Login;
