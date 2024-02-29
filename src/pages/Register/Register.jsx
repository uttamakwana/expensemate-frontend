import { useRef, useState } from "react";
import { Button, Links, MainLogo, SecondaryLogo } from "../../components";
import { useNavigate } from "react-router-dom";
import { CloseEyeIcon, EyeIcon } from "../../constants/icons.js";
import { handleEyeClick, handleRegisterSubmit } from "./utils.js";
import "../styles.css";

const Register = () => {
  // navigate
  const navigate = useNavigate("");
  // refs
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  // states
  const [registerFormData, setregisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  return (
    <main className="register-page | min-h-100 p-1 relative">
      <SecondaryLogo />
      <form
        action=""
        className="form | readable-container absolute-center br-5 flex-col gap-1"
        onSubmit={(e) => handleRegisterSubmit(e)}
      >
        <MainLogo />
        <p className="form-heading  | fs-subheading text-center fw-500">
          Register
        </p>
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
          <span className={registerFormData.password && "active"}>
            Password
          </span>
          <div
            onClick={() =>
              handleEyeClick(passwordRef, isShowPassword, setIsShowPassword)
            }
          >
            {registerFormData.password ? (
              isShowPassword && registerFormData.password ? (
                <CloseEyeIcon className="eye-icon" />
              ) : (
                <EyeIcon className="eye-icon" />
              )
            ) : null}
          </div>
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
          <div
            onClick={() =>
              handleEyeClick(
                confirmPasswordRef,
                isShowConfirmPassword,
                setIsShowConfirmPassword
              )
            }
          >
            {registerFormData.confirmPassword ? (
              isShowConfirmPassword && registerFormData.confirmPassword ? (
                <CloseEyeIcon className="eye-icon" />
              ) : (
                <EyeIcon className="eye-icon" />
              )
            ) : null}
          </div>
        </div>
        {/* Register Button */}
        <Button>Register</Button>
        {/* Register Other Text */}
        <p
          className="form-other-text italic text-black-800 p-8 br-1 text-right"
          onClick={() => navigate("/login")}
        >
          Already have an account?
        </p>
      </form>
      <Links />
    </main>
  );
};

export default Register;
