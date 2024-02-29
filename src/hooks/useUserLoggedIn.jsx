import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useUserLoggedIn() {
  // redux state
  const { user } = useSelector((state) => state.userReducer);
  // navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      return navigate("/login");
    }
  }, [user, navigate]);

  return [user, navigate];
}
