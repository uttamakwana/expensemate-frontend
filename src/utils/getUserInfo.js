import { server } from "../api/api";
import { setClient, setLoading } from "../store/slice/user-slice";

export const getUserInfo = async (id, dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await server.get(`/user?id=${id}`);
    dispatch(setClient(response.data.data.user));
    localStorage.setItem(
      "expensemate-client",
      JSON.stringify(response.data.data.user)
    );
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setClient(null));
    console.log(error);
  }
};
