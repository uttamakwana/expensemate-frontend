import { server } from "../../api/api";
import { setUser } from "../../store/slice/user-slice";

export async function handleRequest(userId, friendId, status, dispatch) {
  try {
    const response = await server.post(`/friend/request?status=${status}`, {
      userId,
      friendId,
    });
    console.log(response.data);
    if (response.data) {
      const user = await server.get(`/user?id=${userId}`);
      dispatch(setUser(user.data.data.user));
    }
  } catch (error) {
    console.log(error);
  }
}
