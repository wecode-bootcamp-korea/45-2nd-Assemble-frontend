import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const KakaoLoginGetToken = () => {
  const [searchParams] = useSearchParams();
  let code = searchParams.get(`code`);

  useEffect(() => {
    axios
      .get(`http://10.58.52.94:3000/users/kakaologin?code=${code}`)
      .then(res => {
        localStorage.setItem("TOKEN", res.data.accessToken);
        const token = localStorage.getItem(`TOKEN`);
        window.opener.postMessage({ token }, window.location.origin);
        window.close();
      })
      .catch(err => {
        alert(err);
        window.close();
      });
  }, [code]);

  return <div>서버 연결 중..</div>;
};

export default KakaoLoginGetToken;
