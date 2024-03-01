/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading, setUser } from "../store/slice/user-slice.js";
import { server } from "../api/api.js";
import toast from "react-hot-toast";

export function useUserLoggedIn() {
  // redux state
  const { user } = useSelector((state) => state.userReducer);
  const [isGetUser, setIsGetUser] = useState(false);
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      return navigate("/login");
    } else {
      if (isGetUser) {
        dispatch(setLoading(true));
        const getUserData = async () => {
          try {
            const response = await server.get(`/user?id=${user._id}`);
            dispatch(setUser(response.data.data.user));
            dispatch(setLoading(false));
            localStorage.setItem(
              "expensemate-user",
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
    }
  }, [navigate, dispatch, isGetUser]);
  return [user, navigate, setIsGetUser];
}
