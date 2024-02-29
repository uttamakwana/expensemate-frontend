import { useRef, useState } from "react";
import { Button, MainLogo, SecondaryLogo } from "../../components";
import "./login.css";
import { useNavigate } from "react-router-dom";
import {
  CloseEyeIcon,
  EyeIcon,
  FrontendMentorIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../constants/icons.js";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const passwordRef = useRef(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate("");

  function handleEyeClick() {
    setIsShowPassword(!isShowPassword);
    if (passwordRef.current.type === "text") {
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
    }
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="login-page | min-h-100 p-1 relative">
      <SecondaryLogo />
      <form
        action=""
        className="login-form | readable-container absolute-center p-1 br-5 flex-col gap-1"
        onSubmit={handleLoginSubmit}
      >
        <MainLogo />
        <p className="fs-subheading text-center fw-500">Sign in</p>
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
          {loginFormData.password ? (
            isShowPassword && loginFormData.password ? (
              <CloseEyeIcon className="eye-icon" onClick={handleEyeClick} />
            ) : (
              <EyeIcon className="eye-icon" onClick={handleEyeClick} />
            )
          ) : null}
          <span className={loginFormData.password && "active"}>Password</span>
        </div>
        <Button>Login</Button>
        <p
          className="other-text italic text-black-800 p-8 br-1 text-right"
          onClick={() => navigate("/register")}
        >
          {"Don't"} have an account?
        </p>
      </form>
      <div className="login-links | flex-center"></div>
      <div className="login-links-container">
        <div className="login-link-box | bg-white-900">
          <GithubIcon className="" />
        </div>
        <div className="login-link-box | bg-white-900">
          <LinkedinIcon className="" />
        </div>
        <div className="login-link-box | bg-white-900">
          <InstagramIcon className="" />
        </div>
        <div className="login-link-box | bg-white-900">
          <FrontendMentorIcon className="" />
        </div>
      </div>
    </main>
  );
};

export default Login;
