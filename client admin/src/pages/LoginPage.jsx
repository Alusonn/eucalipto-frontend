import { useForm } from "react-hook-form";
import "../css/LoginPage.css";
import { useUserStore } from "../hooks/useUserStore";
import { useNavigate } from "react-router";
export const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const { startLogin } = useUserStore();

  const onSubmit = async (data) => {
    await startLogin(data);
  };

  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />
            </div>
            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
