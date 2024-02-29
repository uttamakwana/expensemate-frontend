import { server } from "../../api/api.js";
import { setUser } from "../../store/slice/user-slice.js";

export async function handleFriendRequest(user, ourId, dispatch) {
  try {
    const response = await server.post("/friend/send-request", {
      userId: ourId,
      friendId: user._id,
    });
    console.log(response.data);
    if (response.data) {
      const user = await server.get(`/user?id=${ourId}`);
      dispatch(setUser(user.data.data.user));
    }
  } catch (error) {
    console.log(error);
  }
}
