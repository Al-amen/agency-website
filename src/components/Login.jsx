import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

import {
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  getAuth,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const { loginWithEmail, googleLogin, facebookLogin,githubLogin } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await loginWithEmail(data.email, data.password);
      Swal.fire({
        title: "Login successful",
        icon: "success",
        draggable: true,
      });
      setError("");
      navigate("/");
    } catch (error) {
      console.error("Failed to login", error);
      setError("Failed to login. Please provide correct email and password..");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      console.error("Faild to Login", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await facebookLogin();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const pendingCred = FacebookAuthProvider.credentialFromError(error);
        const email = error.customData?.email;

        const providers = await fetchSignInMethodsForEmail(auth, email);

        if (providers.includes("google.com")) {
          Swal.fire({
            icon: "info",
            title: "Account already exists with Google",
            text: "Please login with Google to link your Facebook account.",
          });

          // Optional: let user log in with Google and then link Facebook manually
          try {
            const googleResult = await googleLogin();
            await linkWithCredential(googleResult.user, pendingCred);
            navigate("/");
          } catch (linkError) {
            console.error(
              "Failed to link Facebook with Google account",
              linkError
            );
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Account exists",
            text: "Please sign in using your original method.",
          });
        }
      } else {
        console.error("Failed to login with Facebook", error);
      }
    }
  };

  const handlegithubLoginLogin = async () => {
    try {
      await githubLogin();
      navigate("/");
    } catch (error) {
      console.error("Faild to Login", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Please Login
        </h2>

        {/* registration form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:{" "}
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`}
            />
            {errors.email && (
              <p className="text-sm italic text-red-500 mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:{" "}
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`}
            />
            {errors.password && (
              <p className="text-sm italic text-red-500 mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-sm italic text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 cursor-pointer rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* social login */}

        <div className="text-center space-y-4">
          <p className="text-gray-600">Or login with</p>

          <div className="flex flex-col sm:flex-row  justify-center  gap-4">
            <button
              onClick={handleGoogleLogin}
              className="flex w-full  items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              <FaGoogle />
              <span>Google</span>
            </button>
            <button
              onClick={handlegithubLoginLogin}
              className="flex w-full items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900"
            >
              <FaGithub />
              <span>GitHub</span>
            </button>
            <button
              onClick={handleFacebookLogin}
              className="flex w-full
              
                         items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              <FaFacebook />
              <span>Facebook</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-center text-gray-600">
          Do not have an account? Please{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
