import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useUser = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState({});
  const [allUserData, setAllUserData] = useState({});
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(
        `https://click-cart-server-pi.vercel.app/user/${user.email}`
      );
      setUserData(res.data);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user?.email, loading]);
  useEffect(() => {
    const fetchAllUserData = async () => {
      const res = await axios.get(
        `https://click-cart-server-pi.vercel.app/users`
      );
      setAllUserData(res.data);
    };
    if (user?.email && !loading) {
      fetchAllUserData();
    }
  }, [user?.email, loading]);
  return { userData, allUserData };
};

export default useUser;
