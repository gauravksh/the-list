import React, { useState } from "react";
import "./Signin.css";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../fire";
import { useNavigate, Link } from "react-router-dom";
export const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { email, password, error, loading } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    } else {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        navigate("/home");
      } catch (err) {
        if (err.message === "Firebase: Error (auth/user-not-found).") {
          setData({ ...data, error: "User not found", loading: false });
        } else if (err.message === "Firebase: Error (auth/wrong-password).") {
          setData({
            ...data,
            error: "Incorrect Password",
            loading: false,
          });
        } else {
          setData({ ...data, error: err.message, loading: false });
        }
      }
    }
  };

  return (
    <div className="signin_outer">
      <div className="main_signin">
        <div className="signin_heading">
          <h3>Sign In</h3>
        </div>

        <div className="signin_email signin_input">
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email..."
          />
          {/* <p className="errorMsg">{emailError}</p> */}
        </div>
        <div className="signin_password signin_input">
          <input
            type="password"
            required
            name="password"
            placeholder="Password..."
            value={password}
            onChange={handleChange}
          />
          {/* <p className="errorMsg">{passwordError}</p> */}
        </div>
        {error ? <p className="errorclass">{error}</p> : null}
        <div className="loginbutton">
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "..." : "Sign In"}
          </button>
          <p className="signinp">
            Don't have an account?
            {/* <span className="signinSpan"> */}
            <Link to="/register">
              <span className="signinSpan">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
