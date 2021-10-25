import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Login4.css";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";

const NormalLoginForm = () => {
  const history = useHistory();
  const [showError, setShowError] = useState(false);

  const onFinish = (values) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((item) => item.json())
      .then((resp) => {
        console.log(resp);
        if (resp.token === "QpwL5tke4Pnpja7X4") {
          history.push("/login__success");
        } else {
          setShowError(true);
          return <h1>Hi</h1>;
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <h1>Welcome Back</h1>
          <h4>Sub-title text goes here </h4>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input className="Email" placeholder="Email Address*" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                className="Password"
                type="password"
                placeholder="Password*"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
              {showError && (
                <div className="error__message">Please login again</div>
              )}
            </Form.Item>
            <Form.Item className="login-form-checkbox">
              <div className="password__details">
                <input id="check" type="checkbox" className="checkbox" />
                <span className="login-form-remember"> Remember Password </span>

                <span className="login-form-forgot">Forgot Password?</span>
              </div>
            </Form.Item>
          </Form>
        </div>
        <div className="layout">
          <div className="btns">
            <button className="button__trial">Start Free Trial</button>
            <button className="button__login">Login</button>
          </div>
          <div className="background"></div>
        </div>
      </div>
    </>
  );
};

export default NormalLoginForm;
