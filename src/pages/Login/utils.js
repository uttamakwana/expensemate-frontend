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

export async function handleLoginSubmit(e, data, dispatch, navigate) {
  e.preventDefault();
  dispatch(setLoading(true));
  try {
    const response = await server.post("/user/login", {
      email: data.email,
      password: data.password,
    });
    dispatch(setClient(response.data.data.user));
    localStorage.setItem(
      "expensemate-client",
      JSON.stringify(response.data.data.user)
    );
    toast.success(response.data.message);
    dispatch(setLoading(false));
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

export const handleSignInWithGoogle = async (dispatch, navigate) => {
  try {
    const data = await signInWithPopup(auth, googleAuthProvider);
    if (data) {
      const response = await server.post("/client/login", {
        email: data.user.email,
      });
      dispatch(setClient(response.data.data.client));
      localStorage.setItem(
        "expensemate-client",
        JSON.stringify(response.data.data.client)
      );
      toast.success(response.data.message);
      navigate("/dashboard");
    }
  } catch (error) {
    console.log(error);
  }
};
