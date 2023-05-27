import { useEffect } from "react";
import styled from "styled-components";
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

  return (
    <Container>
      <Logo src="/images/logo2.png" />
      <Title>로그인 진행 중입니다...</Title>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 260px 0;
  gap: 20px;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
`;
