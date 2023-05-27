import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { apiClient } from "../../utils/index.js";

const Login = () => {
  const [searchParams] = useSearchParams();
  let code = searchParams.get(`code`);

  useEffect(() => {
    apiClient.post(`/users/kakaologin`, { code: code }).then(res => {
      localStorage.setItem("accessToken", res.data.accessToken);
      window.close();
    });
  }, [code]);

  return <div>서버 연결 중</div>;
};

export default Login;
