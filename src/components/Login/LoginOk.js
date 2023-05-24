import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const LoginOk = () => {
  const [searchParams] = useSearchParams();
  let code = searchParams.get(`code`);

  useEffect(() => {
    axios
      .get(
        `http://10.58.52.94:3000/users/kakaologin?code=${code}`
      )
      .then(res => localStorage.setItem('TOKEN', res.data.accessToken))
      .catch(err=>alert(err))
  }, [code]);

  // useEffect(() => {
  //   fetch(`https://kauth.kakao.com/oauth/token`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: JSON.stringify({
  //       grant_type: "authorization_code",
  //       client_id: "f738db3144d940c8ed05927a7d0ecc32",
  //       redirect_uri: "http://localhost:3000/login-ok",
  //       code: searchParams.get(`code`),
  //     }),
  //   })
  //     // .then(res => {
  //     //   if (res.ok) return res.json();
  //     //   throw new Error("통신실패!");
  //     // })
  //     .then(res => console.log(res))
  //     .catch(err => alert(err));
  // }, [searchParams]);
  return <div />;
};

export default LoginOk;
