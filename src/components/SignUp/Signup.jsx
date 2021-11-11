import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../fire";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../../fire";
import { useNavigate, Link } from "react-router-dom";

export const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { name, email, password, error, loading } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    } else {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          name,
          email,
          createdAt: Timestamp.fromDate(new Date()),
        });
        // await setDoc(doc(db, `users.${result.user.uid}`, "Watched"), {});
        // await setDoc(doc(db, `users.${result.user.uid}`, "PlantoWatch"), {});
        // await setDoc(doc(db, `users.${result.user.uid}`, "Favs"), {});

        setData({
          name: "",
          email: "",
          password: "",
          error: null,
          loading: "false",
        });
        // console.log(result.user);
        navigate("/home");
      } catch (err) {
        if (err.message === "Firebase: Error (auth/invalid-email).") {
          setData({ ...data, error: "Invalid Email", loading: false });
        } else if (
          err.message ==
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setData({
            ...data,
            error: "Password should be at least 6 characters",
            loading: false,
          });
        } else if (
          err.message === "Firebase: Error (auth/email-already-in-use)."
        ) {
          setData({ ...data, error: "Email already in use", loading: false });
        } else {
          setData({ ...data, error: err.message, loading: false });
        }
      }
    }
  };

  return (
    <div className="signup_outer">
      <div className="main_signup">
        <div className="signup_heading">
          <h3>Sign Up</h3>
        </div>
        <div className="signup_name signup_input">
          <input
            type="text"
            autoFocus
            name="name"
            required
            placeholder="Name..."
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="signup_email signup_input">
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
        <div className="signup_password signup_input">
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
        <div className="signupbutton">
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "..." : "Sign Up"}
          </button>
          <p>
            Have an account?
            <Link to="/signin">
              <span className="signinSpan">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
