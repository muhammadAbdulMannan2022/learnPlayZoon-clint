import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { signUpWithGoogle, createUserWithEmailAndPass } =
    useContext(AuthContext);
  const handleGoogleLogin = () => {
    signUpWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, photoUrl, password } = form;
    createUserWithEmailAndPass(email.value, password.value).then((resault) => {
      const currentUser = resault.user;
      updateProfile(currentUser, {
        displayName: name.value,
        photoURL: photoUrl.value,
      })
        .then(() => {
          console.log("update success");
          navigate("/");
        })
        .catch((err) => console.log(err));
    });
  };
  return (
    <div className="bg-blue-100 py-10 flex items-center justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="input input-bordered"
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
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="px-1 lg:px-5 text-gray-500">
          already have an account{" "}
          <Link to="/login" className="text-blue-600">
            login
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

export default Register;
