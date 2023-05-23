import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const REST_API_KEY = process.env.KAKAO_API_KEY;
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  // const REDIRECT_URI = `http://10.58.52.94:3000/kakao/code`;
  const REDIRECT_URI = `http://localhost:3000/login-ok`;
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  // const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&prompt=none`;

  const gogo = () => {
    window.open(
      url,
      "window_name",
      "width=430,height=500,location=no,status=no,scrollbars=yes"
    );
  };

  return (
    <div>
      {/* <Link to={url}>Login</Link> */}
      <div onClick={gogo}>Login</div>
    </div>
  );
};

export default Login;
