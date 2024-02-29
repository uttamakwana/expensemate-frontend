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
      dispatch(setUser(response.data.data.user));
      dispatch(setLoading(false));
      toast.success("Registration successfull!");
      navigate("/dashboard");
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  } else {
    toast.error("Please enter the same password!");
  }
}
