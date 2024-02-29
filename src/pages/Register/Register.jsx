import { useRef, useState } from "react";
import { Button, MainLogo, SecondaryLogo } from "../../components";
import "./register.css";
import { useNavigate } from "react-router-dom";
import {
  CloseEyeIcon,
  EyeIcon,
  FrontendMentorIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../constants/icons.js";

const Register = () => {
  const [registerFormData, setregisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const navigate = useNavigate("");

  function handleEyeClick() {
    setIsShowPassword(!isShowPassword);
    if (passwordRef.current.type === "text") {
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
    }
  }

  function handleEyeClickOnConfirmPassword() {
    setIsShowConfirmPassword(!isShowConfirmPassword);
    if (confirmPasswordRef.current.type === "text") {
      confirmPasswordRef.current.type = "password";
    } else {
      confirmPasswordRef.current.type = "text";
    }
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="register-page | min-h-100 p-1 relative">
      <SecondaryLogo />
      <form
        action=""
        className="register-form | readable-container absolute-center p-1 br-5 flex-col gap-1"
        onSubmit={handleRegisterSubmit}
      >
        <MainLogo />
        <p className="fs-subheading text-center fw-500">Register</p>
        {/* First name + Last name */}
        <div className="even-form-group flex gap-8">
          <div className="form-group | flex-grow-1 relative">
            <input
              type="text"
              name="register-first-name"
              id="register-first-name"
              className="input"
              value={registerFormData.firstName}
              onChange={(e) =>
                setregisterFormData((prev) => {
                  return { ...prev, firstName: e.target.value };
                })
              }
            />
            <span className={registerFormData.firstName && "active"}>
              First Name
            </span>
          </div>
          <div className="form-group | flex-grow-1 relative">
            <input
              type="text"
              name="register-last-name"
              id="register-last-name"
              className="input"
              value={registerFormData.lastName}
              onChange={(e) =>
                setregisterFormData((prev) => {
                  return { ...prev, lastName: e.target.value };
                })
              }
            />
            <span className={registerFormData.lastName && "active"}>
              Last Name
            </span>
          </div>
        </div>
        {/* Email */}
        <div className="form-group | relative">
          <input
            type="email"
            name="register-email"
            id="register-email"
            className="input"
            value={registerFormData.email}
            onChange={(e) =>
              setregisterFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <span className={registerFormData.email && "active"}>Email</span>
        </div>
        {/* Password */}
        <div className="form-group | relative">
          <input
            type="password"
            name="register-password"
            id="register-password"
            className="input"
            ref={passwordRef}
            value={registerFormData.password}
            onChange={(e) =>
              setregisterFormData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          {registerFormData.password ? (
            isShowPassword && registerFormData.password ? (
              <CloseEyeIcon className="eye-icon" onClick={handleEyeClick} />
            ) : (
              <EyeIcon className="eye-icon" onClick={handleEyeClick} />
            )
          ) : null}
          <span className={registerFormData.password && "active"}>
            Password
          </span>
        </div>
        {/* Confirm Password */}
        <div className="form-group | relative">
          <input
            type="password"
            name="register-cofirm-password"
            id="register-cofirm-password"
            className="input"
            ref={confirmPasswordRef}
            value={registerFormData.confirmPassword}
            onChange={(e) =>
              setregisterFormData((prev) => {
                return { ...prev, confirmPassword: e.target.value };
              })
            }
          />
          <span className={registerFormData.confirmPassword && "active"}>
            Confirm Password
          </span>
          <div onClick={handleEyeClickOnConfirmPassword}>
            {registerFormData.confirmPassword ? (
              isShowConfirmPassword && registerFormData.confirmPassword ? (
                <CloseEyeIcon className="eye-icon" />
              ) : (
                <EyeIcon className="eye-icon" />
              )
            ) : null}
          </div>
        </div>
        <Button>Register</Button>
        <p
          className="other-text italic text-black-800 p-8 br-1 text-right"
          onClick={() => navigate("/login")}
        >
          Already have an account?
        </p>
      </form>
      <div className="register-links | flex-center"></div>
      <div className="register-links-container">
        <div className="register-link-box | bg-white-900">
          <GithubIcon className="" />
        </div>
        <div className="register-link-box | bg-white-900">
          <LinkedinIcon className="" />
        </div>
        <div className="register-link-box | bg-white-900">
          <InstagramIcon className="" />
        </div>
        <div className="register-link-box | bg-white-900">
          <FrontendMentorIcon className="" />
        </div>
      </div>
    </main>
  );
};

export default Register;
