import { useRef, useState } from "react";
import { Links, MainLogo, SecondaryLogo } from "../../components";
import { useNavigate } from "react-router-dom";
import { CloseEyeIcon, EyeIcon } from "../../constants/icons.js";
import {
  handleEyeClick,
  handleRegisterSubmit,
  handleSignUpWithGoogle,
} from "./utils.js";
import "../styles.css";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../constants/Loader/ButtonLoader.jsx";
import { google } from "../../constants/images.js";
import ImageUploader from "../../components/ui/ImageUploader/ImageUploader.jsx";

const Register = () => {
  // navigate
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);
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
  const [file, setFile] = useState();

  return (
    <main className="register-page | min-h-100 p-1 relative">
      <SecondaryLogo />
      <form
        action=""
        className="form | readable-container absolute-center br-5 flex-col gap-1"
        onSubmit={(e) =>
          handleRegisterSubmit(e, registerFormData, navigate, dispatch, file)
        }
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
          {/* Last Name */}
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
        <ImageUploader file={file} setFile={setFile} />
        {/* Register Button */}
        <button
          className={`btn br-10 bg-primary-400 text-white-900 fw-600 fs-button flex-center ${
            loading && "button-loading"
          }`}
          disabled={loading}
        >
          {loading ? (
            <ButtonLoader width={"1rem"} height={"1rem"} />
          ) : (
            "Reigster"
          )}
        </button>
        <p className="text-center fs-extrasmall ">OR</p>
        {/* Sign up with Google Button */}
        <div
          className="google-btn"
          onClick={() => {
            handleSignUpWithGoogle(dispatch, navigate);
          }}
        >
          <img src={google} alt="google" /> Sign in with Google
        </div>
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
