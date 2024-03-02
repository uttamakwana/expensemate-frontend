import toast from "react-hot-toast";
import { server } from "../../api/api.js";
import { setLoading, setClient } from "../../store/slice/user-slice.js";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase/app.js";

export function handleEyeClick(ref, value, setValue) {
  setValue(!value);
  if (ref.current.type === "text") {
    ref.current.type = "password";
  } else {
    ref.current.type = "text";
  }
}

export async function handleRegisterSubmit(
  e,
  formData,
  navigate,
  dispatch,
  file
) {
  e.preventDefault();
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    return toast.error("All fields are required!");
  }
  if (formData.password !== formData.confirmPassword) {
    dispatch(setLoading(false));
    return toast.error("Please enter the same password!");
  }
  dispatch(setLoading(true));
  try {
    const reqData = new FormData();
    reqData.append("name", formData.firstName + " " + formData.lastName);
    reqData.append("email", formData.email);
    reqData.append("password", formData.password);
    reqData.append("image", file);

    const response = await server.post("/user/register", reqData);
    console.log(file);
    dispatch(setClient(response.data.data.user));
    localStorage.setItem(
      "expensemate-client",
      JSON.stringify(response.data.data.user)
    );
    dispatch(setLoading(false));
    toast.success("Registration successfull!");
    navigate("/dashboard");
  } catch (error) {
    dispatch(setLoading(false));
    if (error.message === "Network Error") {
      return toast.error("Internal server error!");
    }
    error.response && toast.error(error.response.data.message);
    console.log(error);
  }
}

export async function handleSignUpWithGoogle(dispatch, navigate) {
  try {
    const data = await signInWithPopup(auth, googleAuthProvider);
    if (data) {
      const response = await server.post("/user/register", {
        name: data.user.displayName,
        email: data.user.email,
        avatar: data.user.photoURL,
      });
      dispatch(setClient(response.data.data.user));
      localStorage.setItem(
        "expensemate-client",
        JSON.stringify(response.data.data.user)
      );
      toast.success("Registration successfull!");
      navigate("/dashboard");
    }
  } catch (error) {
    if (error.message === "Network Error") {
      return toast.error("Internal server error!");
    }
    error.response && toast.error(error.response.data.message);
    console.log(error);
  }
}
