import React, { useState } from "react";

import { userLogin, reset } from "../../features/userSlice";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log("error in login");
    }

    if (isSuccess || userData) {
      navigate("/");
    }

    dispatch(reset());
  }, [userData, isError, isSuccess, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      email,
      password,
    };

    dispatch(userLogin(userObject));
  };

  return (
    <>
      <div className="container">
        <section className="login">
          <h1>Login Here!</h1>
          <p>Log into your Account</p>

          <div className="login__form">
            <form onSubmit={onSubmit}>
              <div className="login__email-container">
                <input
                  type="email"
                  className="login__email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
              <div className="login__password-container">
                <input
                  type="password"
                  className="login__password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
              </div>

              <input type="submit" name="submit" value={"Submit"} />
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
