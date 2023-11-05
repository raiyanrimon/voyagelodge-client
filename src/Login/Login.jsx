import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import login from "../assets/login.png";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("password or email doesn't match");
      });
  };
  return (
    <div className="hero min-h-screen">
      <img src={login} alt="" />
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <form onSubmit={handleLogin} className="card-body md:w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>
            <p onClick={googleLogin} className="w-full btn text-red-500">
              <BsGoogle className="text-xl mr-1"></BsGoogle>Login with Google
            </p>
          </form>
          <p className="ml-12 mb-5">
            New here?
            <Link to="/register">
              <button className="text-primary ml-2">Register</button>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
