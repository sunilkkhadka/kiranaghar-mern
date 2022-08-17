import React, { useState } from "react";

import { userRegistration, reset } from "../../features/userSlice";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) {
      console.log("error in registration");
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

    if (password === password2) {
      const userObject = {
        name,
        email,
        password,
      };

      dispatch(userRegistration(userObject));
    }
  };

  return (
    <>
      <div className="container">
        <section className="register">
          <h1>Register Here!</h1>
          <p>Create a new Account</p>

          <div className="register__form">
            <form onSubmit={onSubmit}>
              <div className="register__name-container">
                <input
                  type="text"
                  className="register__name"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={onChange}
                />
              </div>
              <div className="register__email-container">
                <input
                  type="email"
                  className="register__email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
              <div className="register__password-container">
                <input
                  type="password"
                  className="register__password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
              </div>
              <div className="register__password2-container">
                <input
                  type="password"
                  className="register__password2"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Repeat your password"
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

export default RegisterPage;
