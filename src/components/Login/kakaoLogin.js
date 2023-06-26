export const kakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = `${process.env.REACT_APP_BASE_URL}/kakao-login`;
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const width = 550; // 창 너비
  const height = 750; // 창 높이
  const left = window.screen.width / 2 - width / 2;
  const tops = window.screen.height / 2 - height / 2 - 50;

  window.open(
    url,
    "kakaoLogin",
    `width=${width}, height=${height}, left=${left}, top=${tops}`
  );
};
