import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store/adminSlice";
import { adminApi } from "../api/adminApi";
import { useNavigate } from "react-router";

export const useUserStore = () => {
  const dispatch = useDispatch();

  const { authStatus, user, message } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  const startChecking = async () => {
    try {
      dispatch(onChecking());
    } catch (error) {
      console.log(error);
    }
  };

  const startLogin = async (formLogin) => {
    try {
      dispatch(onChecking());
      const { data } = await adminApi.post("/admin/login", formLogin);

      dispatch(onLogin(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const startLogout = async () => {
    try {
      const { data } = await adminApi.post("/admin/logout");

      dispatch(onLogout(data));
      console.log(data);
      navigate("/login");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // Propiedades

    authStatus,
    user,
    message,

    // Metodos

    startChecking,
    startLogin,
    startLogout,
  };
};