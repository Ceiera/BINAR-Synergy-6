import { useState } from "react";
import viteLogo from "/vite.svg";
import "./login.css";
import { Button, Space, Input, Alert } from "antd";
import { useNavigate } from "react-router-dom";
function Login() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [loginError, setLoginError] = useState({
    status: "",
    message: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const redirect = useNavigate();

  const handleClick = async () => {
    setButtonLoading(true);
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email + ".com",
        password: password,
      }),
    });
    const result = await response.json();
    if (response.status != 200) {
      setLoginError({
        status: result.status,
        message: result.message,
      });
      setAlertVisible(true);
    } else {
      localStorage.setItem("token", result.data.token);
      redirect("/cars/add");
    }
    setButtonLoading(false);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/o8MBQeSj1IeFnRGbCygLPdNyIeWqKNIC7AgC0A~tplv-photomode-zoomcover:480:480.jpeg?x-expires=1701262800&x-signature=B%2BOY8O6iydId39g%2FeYxvXdCr0bg%3D"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <Space direction="vertical">
        <Alert
          message={loginError.status}
          description={loginError.message}
          type="error"
          showIcon
          style={{ display: alertVisible ? "flex" : "none" }}
        />
        <Input
          suffix=".com"
          placeholder="your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Space direction="horizontal">
          <Input.Password
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Space>
      </Space>
      <div className="card">
        <Button type="dashed" onClick={handleClick} loading={buttonLoading}>
          klik
        </Button>
      </div>
    </>
  );
}

export default Login;
