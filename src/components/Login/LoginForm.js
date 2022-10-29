import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { login, errors, isLoadings } = useLogin();

  const onSubmit = async (event) => {
    if (!username || !password) {
      event.preventDefault();
      toast.error("Please fill the form", {
        icon: "🚨",
      });
      return;
    }
    if (isLoadings) {
      toast.error(errors);
    }
    event.preventDefault();
    await login(username, password);
  };

  return (
    <div className="main container">
      <ToastContainer />
      <div className="login" style={{ display: "block" }}>
        <form onSubmit={onSubmit}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon"></i>
              </div>
              {isLoadings && <ToastContainer />}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
