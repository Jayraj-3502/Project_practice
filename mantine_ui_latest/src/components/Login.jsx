import GoogleOneTapLogin, {
  useGoogleOneTapLogin,
} from "react-google-one-tap-login";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CLIENT_ID =
  "690673299456-u03ea8hp5h9jd3e4m87dd408p7j5e2la.apps.googleusercontent.com";

function Login() {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    console.log(response);
    // try {
    //   const decoded = jwtDecode(response.credential);

    //   console.log("Google User:", decoded);

    //   // Example user object
    //   const user = {
    //     name: decoded.name,
    //     email: decoded.email,
    //     picture: decoded.picture,
    //   };

    //   // Save user (optional)
    //   localStorage.setItem("user", JSON.stringify(user));

    //   // Redirect to home
    //   navigate("/home");
    // } catch (error) {
    //   console.error("Login error:", error);
    // }
  };

  const handleError = () => {
    console.log("Google One Tap Login Failed");
  };

  useGoogleOneTapLogin({
    onError: (error) => console.log(error),
    onSuccess: (response) => console.log(response),
    googleAccountConfigs: {
      client_id: CLIENT_ID,
      callback: handleSuccess,
    },
  });

  return (
    <div style={{ height: "100vh" }}>
      <h2>Login Page</h2>

      {/* <GoogleOneTapLogin
        googleAccountConfigs={{
          client_id: CLIENT_ID,
          callback: handleSuccess,
        }}
        onError={handleError}
      /> */}
    </div>
  );
}

export default Login;
