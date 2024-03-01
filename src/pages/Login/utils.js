import toast from "react-hot-toast";
import { server } from "../../api/api.js";
import { setLoading, setUser } from "../../store/slice/user-slice.js";

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
    console.log(response.data);
    dispatch(setUser(response.data.data.user));
    localStorage.setItem(
      "expensemate-user",
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
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
}
