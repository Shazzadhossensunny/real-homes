import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextComponent";
import { toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("SuccessFully Login");
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  {showPassword ? (
                    <FaEye
                      onClick={handleShowPassword}
                      className="absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer"
                    ></FaEye>
                  ) : (
                    <FaEyeSlash
                      onClick={handleShowPassword}
                      className="absolute top-1/2 -translate-y-1/2 right-4 text-xl cursor-pointer"
                    ></FaEyeSlash>
                  )}
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#1ea69a] text-white">
                  Login
                </button>
              </div>
            </form>

            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#1cb2ff] hover:link-hover">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
