import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const LoginOk = () => {
  // const [searchParams] = useSearchParams();
  // searchParams.get(`code`);

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    console.log(code);
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAO_API_KEY;

    axios
      .get(
        `http://10.58.52.94:3000/kakao/code?code=${code}`
        // `https://kauth.kakao.com/oauth/token?
        // grant_type=${grant_type}
        // &client_id=${client_id}
        // &redirect_uri=http://localhost:3000/login-ok
        // &code=${code}`,
        // {
        //   headers: {
        //     "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        //   },
        // }
      )
      .then(res => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);

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
