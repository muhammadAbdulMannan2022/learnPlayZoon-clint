import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { signUpWithGoogle, loginWithEmailAndPass } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signUpWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleLoginEmailPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form;
    loginWithEmailAndPass(email.value, password.value)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-2xl text-center pt-5">Login</h1>
        <form onSubmit={handleLoginEmailPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="px-1 lg:px-5 text-gray-500">
          New to this site ?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <div
          onClick={handleGoogleLogin}
          className="bg-white p-3 cursor-pointer rounded-full hover:bg-gray-100 border my-5 mx-auto"
        >
          <FaGoogle className="w-6 h-6 text-blue-400 " />
        </div>
      </div>
    </div>
  );
};

export default Login;
