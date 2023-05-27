import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const KakaoLoginGetToken = () => {
  const [searchParams] = useSearchParams();
  let code = searchParams.get(`code`);

  useEffect(() => {
    // axios
    // .get(
    //   `http://10.58.52.94:3000/users/kakaologin?code=${code}`
    //   )
    //   .then(res => {
    //     // localStorage.setItem('TOKEN', res.data.accessToken)
    //     window.close();
    //   })
    //   .catch(err=>alert(err))
    // localStorage.setItem('TOKEN', `임시 토큰`)
    // window.opener.setToken(`z`);

    window.opener.postMessage({ code }, window.location.origin);

    // window.opener.location.reload();
  }, [code]);

  return <div />;
};

export default KakaoLoginGetToken;
