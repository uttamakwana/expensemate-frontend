/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading, setClient } from "../store/slice/user-slice.js";
import { server } from "../api/api.js";
import toast from "react-hot-toast";
import { GetUserContext } from "../context/GetUser.jsx";

export function useUserLoggedIn() {
  const { isGetUser } = useContext(GetUserContext);
  // redux state
  const { client } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (client === null) {
      return navigate("/login");
    } else {
      dispatch(setLoading(true));
      const getUserData = async () => {
        try {
          const response = await server.get(`/user?id=${client._id}`);
          dispatch(setClient(response.data.data.user));
          dispatch(setLoading(false));
          localStorage.setItem(
            "expensemate-client",
            JSON.stringify(response.data.data.user)
          );
        } catch (error) {
          toast.error("Something went wrong!");
          dispatch(setLoading(false));
          console.log(error);
        }
      };
      getUserData();
    }
  }, [navigate, dispatch, isGetUser]);
  return [client, navigate];
}
