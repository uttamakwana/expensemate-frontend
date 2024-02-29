import { useEffect } from "react";
import { server } from "../../api/api.js";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers, setLoading } from "../../store/slice/user-slice.js";
import Loader from "../../components/Loader/Loader.jsx";
import "./users.css";
import UserCard from "./UserCard.jsx";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, allUsers, user } = useSelector((state) => state.userReducer);
  const ourId = user._id;
  useEffect(() => {
    dispatch(setLoading(true));
    const getAllUsers = async () => {
      try {
        const response = await server.get("/user/all");
        const allUsers = response.data.data;
        const copyAllUsers = allUsers.filter((e) => {
          const alreadyFriend = user.friends.find((f) => f.email === e.email);
          if (!alreadyFriend) return e;
        });
        console.log(copyAllUsers);
        dispatch(setLoading(false));
        dispatch(setAllUsers(copyAllUsers));
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    getAllUsers();
  }, [dispatch, user.friends]);

  if (loading) {
    return (
      <div className="users-loader flex-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="users-list py-1">
      <div className="users-grid card-grid">
        {allUsers &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
            <UserCard key={user._id} user={user} ourId={ourId} />
          ))}
      </div>
    </main>
  );
};

export default Users;
