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

export async function handleRegisterSubmit(e, formData, navigate, dispatch) {
  e.preventDefault();
  dispatch(setLoading(true));
  if (formData.password === formData.confirmPassword) {
    try {
      const response = await server.post("/user/register", {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
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
      toast.error(error.response.data.message);
      console.log(error);
    }
  } else {
    dispatch(setLoading(false));
    toast.error("Please enter the same password!");
  }
}

export async function handleSignUpWithGoogle() {
  try {
    const data = await signInWithPopup(auth, googleAuthProvider);
    if (data) {
      const response = await server.post("/client/register", {
        name: data.user.displayName,
        email: data.user.email,
        avatar: data.user.photoURL,
      });
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
}
