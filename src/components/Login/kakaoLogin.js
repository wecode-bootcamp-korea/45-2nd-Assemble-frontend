export const kakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = `${process.env.REACT_APP_BASE_URL}/kakao-login`;
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  window.open(
    url,
    "window_name",
    "width=430,height=500,location=no,status=no,scrollbars=yes"
  );
};
