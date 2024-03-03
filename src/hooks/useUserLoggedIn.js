import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../utils/getUserInfo";
import { useEffect } from "react";

export const useUserLoggedIn = () => {
  const { client } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  if (client === null) {
    navigate("/login");
  }
  useEffect(() => {
    getUserInfo(client._id, dispatch);
  }, []);
  return [client, navigate];
};
