import { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import { useMutateMe } from "../../service//mutation/useMutateMe";
import { fadeIn, fadeOut } from "../../pages/Matching/components/animation";
import { async } from "q";
import ProductDetailPaymentModal from "../../pages/ProductDetails/components/ProductDetailPaymentModal";

export default NiceModal.create(reserveData => {
  const { mutate } = useMutateMe();

  const [updateInfo, setUpdateInfo] = useState({
    name: "",
    gender: "",
    level: "",
  });
  const modal = useModal();
  const paymentModal = useModal(ProductDetailPaymentModal);

  const closedModal = () => {
    modal.remove();
  };

  const handleResolve = async () => {
    await updateUserInfo();
    await paymentModal.show();
    await modal.remove();
  };

  const conditions = {
    name: updateInfo.name,
    gender: updateInfo.gender,
    level: updateInfo.level,
  };

  const isAllfilled = Object.values(conditions).every(value => value !== "");

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdateInfo(prev => ({ ...prev, [name]: value }));
  };

  const updateUserInfo = () => {
    if (isAllfilled) {
      mutate(updateInfo);
      modal.resolve();
      modal.hide();
    } else {
      alert("추가 정보를 모두 기입해주세요");
    }
  };

  return (
    <Container visible={modal.visible}>
      <Content>
        <TitleWrapper>
          <Title>추가 고객정보 입력</Title>
          <Subtitle>매칭에 필요한 추가 고객정보를 입력해주세요.</Subtitle>
        </TitleWrapper>
        <InfoInputs>
          <InfoItem>
            <Key>이름</Key>
            <InfoInput
              type="text"
              name="name"
              value={updateInfo.name}
              onChange={handleChange}
            />
          </InfoItem>
          <InfoItem>
            <Key>성별</Key>
            <UserInfoRadioWrapper>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                />
                남성
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                />
                여성
              </label>
            </UserInfoRadioWrapper>
          </InfoItem>
          <InfoItem>
            <Key>레벨</Key>
            <UserInfoRadioWrapper>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="ONE"
                  onChange={handleChange}
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="TWO"
                  onChange={handleChange}
                />
                2
              </label>
              <label>
                <input
                  type="radio"
                  name="level"
                  value="THREE"
                  onChange={handleChange}
                />
                3
              </label>
            </UserInfoRadioWrapper>
          </InfoItem>
        </InfoInputs>
        <ButtonArea>
          <ConfirmButtons>
            <LoginBtn onClick={closedModal} color="white">
              취소
            </LoginBtn>

            <LoginBtn onClick={handleResolve} color="#89B922">
              완료
            </LoginBtn>
          </ConfirmButtons>
        </ButtonArea>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => (props.visible ? "flex" : "none")};
  opacity: ${props => (props.visible ? 1 : 0)};

  background-color: rgba(40, 40, 40, 0.8);
  transition: opacity 0.5s ease;
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 0.5s ease;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 400px;
  height: 500px;
  background-color: #f1f1f1;
  padding: 40px;
  border-radius: 16px;

  @media screen and (max-width: 550px) {
    width: 400px;
    height: 500px;
  }

  @media screen and (max-width: 440px) {
    width: 330px;
    height: 400px;
    padding: 24px;
    gap: 24px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const Title = styled.div`
  font-size: 24px;
  text-align: center;
  padding-top: 40px;
  font-weight: 700;

  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
  @media screen and (max-width: 440px) {
    padding-top: 24px;
  }
`;

const Subtitle = styled.div`
  font-size: 16px;
  @media screen and (max-width: 440px) {
    font-size: 12px;
  }
`;
const InfoInputs = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 16px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  width: 100%;
  height: 100%;
  max-height: 60px;
  border-radius: 12px;

  @media screen and (max-width: 550px) {
  }
  @media screen and (max-width: 440px) {
  }
`;

const Key = styled.div`
  color: #000000;
  font-size: 18px;
  @media screen and (max-width: 440px) {
    font-size: 16px;
  }
`;
const InfoInput = styled.input`
  width: 200px;
  height: 100%;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 8px;
  @media screen and (max-width: 550px) {
    width: 180px;
  }
`;
const UserInfoRadioWrapper = styled.div`
  width: 200px;
  display: flex;
  gap: 32px;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 3px;
    margin-left: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  & > label > input[type="radio"] {
    appearance: none;
    width: 15px;
    height: 15px;
    background-image: url("/images/CheckBox/unChecked.png");
  }

  [type="radio"]:checked {
    width: 15px;
    height: 15px;
    background-image: url("/images/CheckBox/checked.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 550px) {
    width: 180px;
  }
`;

const ConfirmButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  gap: 20px;
`;

const ButtonArea = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-width: 550px) {
    flex: 0.4;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  max-width: 240px;
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  color: ${props => (props.color === "#89B922" ? "white" : "black")};
  background-color: ${props => props.color};
  &:hover {
    background-color: ${props =>
      props.color === "#89B922" ? "#A1DB26" : "#e1dfdf"};
  }

  @media screen and (max-width: 550px) {
    max-width: 200px;
  }
  @media screen and (max-width: 440px) {
    padding: 12px;
  }
`;
