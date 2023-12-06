import { useState, ChangeEvent } from "react";
import { Input, Button, Alert } from "antd";
import LoginBackground from "../assets/loginbackground.png";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

interface googleAuth {
  credential?: string;
  clientId?: string;
  select_by?: string;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [loginButtonLoading, setLoginButtonLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.id == "email") {
      setEmail(e.target.value);
    } else if (e.target.id == "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async () => {
    setAlertVisible(false);
    setLoginButtonLoading(true);
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const result = await response.json();
    if (response.status == 200) {
      localStorage.setItem("token", result.data.token);
      navigate("/cars/add");
    } else {
      setAlertVisible(true);
    }
    setLoginButtonLoading(false);
  };

  const handleLoginGoogleSuccess = async (credentialResponse: googleAuth) => {
    setLoginButtonLoading(true);
    const payload = {
      credential: credentialResponse.credential,
      clientId: credentialResponse.clientId,
    }
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/login/google",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const result = await response.json();
    if (response.status == 200) {
      setLoginButtonLoading(false);
      localStorage.setItem("token", result.data.token);
      navigate("/cars");
    } else {
      console.log(result);
      setLoginButtonLoading(false);
    }
  };

  const handleLoginGoogleError = () => {
    alert("google login error");
  };

  return (
    <>
      <div className="flex flex-row gap-x-12">
        <div className="w-8/12">
          <img src={LoginBackground} alt="" />
        </div>
        <div className="w-4/12 flex flex-col place-content-center mr-12 gap-y-8">
          <div>ini logo</div>
          <h1 className="text-3xl">Welcome, Admin BCR</h1>
          <div className="flex flex-col gap-y-4">
            <Alert
              style={{ display: alertVisible ? "flex" : "none" }}
              description="Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital."
              type="error"
            />
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <Input
                placeholder="Contoh: johndee@gmail.com"
                onChange={handleInput}
                id="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <Input.Password
                placeholder="6+ Karakter"
                onChange={handleInput}
                id="password"
              />
            </div>
          </div>

          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              size="large"
              onSuccess={handleLoginGoogleSuccess}
              onError={handleLoginGoogleError}
            />
          </GoogleOAuthProvider>

          <Button
            className="w-full"
            onClick={handleLogin}
            loading={loginButtonLoading}
          >
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
