import React, { useContext, useState } from "react";
import login from "../assests/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, verifyEMail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  //create a state for terms and conditions
  const [accepted, setAccepted] = useState(false);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true }); //successful hole error ta clean hye jave
        form.reset();
        //update user call
        handleUpdateUserProfile(name, photoURL); //call update userprofile
        handleEmailVerification(); //call email verification
        //toast use korle app.js toaster set krte hbe and install korte hbe toaster k
        toast.success("please verify your email address", {
          position: "top-center",
        });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  //handleUpdateUserProfile
  const handleUpdateUserProfile = (name, photoURL, designation) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
      designation: designation,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  //handleEmailVerification
  const handleEmailVerification = () => {
    verifyEMail()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  //check box
  const handleAccepted = (event) => {
    console.log(event.target.checked);
    setAccepted(event.target.checked);
  };

  return (
    <div className="my-20">
      <div className="hero min-h-screen ">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hover:shadow-violet-600 py-12">
            <h1 className="text-4xl text-center font-bold my-3">SignUp!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Designation</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  placeholder="designation"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label
                  onClick={handleAccepted}
                  className="label cursor-pointer"
                >
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">
                    <>
                      Accept <Link to="/terms">Terms and conditions</Link>
                    </>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  disabled={!accepted}
                  className="btn btn-primary"
                  value="Sing Up"
                />
              </div>
              <p className="text-red-600">{error}</p>
            </form>

            <p className="text-center">
              Al Ready have an Account
              <Link className="text-orange-600 font-bold ml-2" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
