import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password).then(() => {
      navigate("/");
    });
  };
  const googleLoginUser = () => {
    googleLogin().then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="flex">
        <div className="max-w-md mx-auto my-4 p-6 rounded-lg shadow bg-base-200 w-1/2">
          <h2 className="text-3xl font-semibold text-center">
            Login to your account
          </h2>
          <p className="text-sm text-center mt-2 text-base-content">
            Don`t have an account?
            <Link to="/register" className="text-primary ml-1 hover:underline">
              Sign up here
            </Link>
          </p>

          <div className="my-2">
            <button
              type="button"
              onClick={googleLoginUser}
              className="btn btn-outline btn-accent w-full gap-2"
            >
              <FcGoogle className="w-5 h-5" />
              Login with Google
            </button>
          </div>

          <div className="divider">OR</div>

          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-light">
                  Email is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label htmlFor="password" className="label flex justify-between">
                <span className="label-text">Password</span>
                <a href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              </label>
              <label className="input input-bordered flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="•••••••"
                  className="grow w-full"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                <p onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </p>
              </label>
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm font-light">
                  Password must have at least 6 characters
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
        </div>
        <img
          src="https://raw.githubusercontent.com/Merajul09/StockImage/main/image/login/loginImage.jpg"
          className="w-1/2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Login;
