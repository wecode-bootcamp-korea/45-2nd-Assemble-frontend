import React, { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import { apiClient } from "../../../utils";

export default NiceModal.create(({ fetchData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewFile, setPreviewFile] = useState("");
  const [courtInfo, setCourtInfo] = useState({
    courtName: "",
    address: "",
    price: "",
  });

  const modal = useModal();
  const closedModal = () => {
    modal.remove();
    document.body.style.overflow = "unset";
  };

  const handleFileChange = event => {
    const files = event.target.files;
    setSelectedFile(files);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      setPreviewFile(reader.result);
    };
  };

  const handleInfo = e => {
    const { name, value } = e.target;
    setCourtInfo({ ...courtInfo, [name]: value });
  };

  const addCourt = async () => {
    const formData = new FormData();
    formData.append("courtImage", selectedFile[0]);
    formData.append("name", courtInfo.courtName);
    formData.append("address", courtInfo.address);
    formData.append("price", courtInfo.price);
    try {
      await apiClient.post(`http://10.58.52.234:3000/courts`, formData);
    } catch (error) {
      console.error("PATCH 요청 실패:", error);
    }
    fetchData();
    modal.remove();
    document.body.style.overflow = "unset";
  };

  return (
    <Container>
      <ModalSection>
        <ClosedButton onClick={closedModal}>X</ClosedButton>
        <Content>
          <Title>등록하기</Title>
          <ImgPreview src={previewFile} alt="코트장 이미지를 추가해주세요" />
          <UploadInput
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <LongTextInput
            type="text"
            placeholder="코트장명"
            name="courtName"
            onChange={handleInfo}
          />
          <InputArea>
            <TextInput type="text" placeholder="강북/강남" />
            <TextInput type="text" placeholder="자치구" />
          </InputArea>
          <LongTextInput
            type="text"
            placeholder="주소"
            name="address"
            onChange={handleInfo}
          />
          <InputArea>
            <TextInput
              type="text"
              placeholder="금액"
              name="price"
              onChange={handleInfo}
            />
            <TextInput type="text" placeholder="실내/실외" />
          </InputArea>
          <TypeArea>
            <div>코트타입</div>
            <TypeValueArea>
              {COURT_TYPE.map(item => (
                <label htmlFor={item.type} key={item.type}>
                  <input type="radio" id={item.type} name="courtType" />
                  {item.type}
                </label>
              ))}
            </TypeValueArea>
          </TypeArea>
          <OptionArea>
            <OptionValueArea>
              샤워시설
              <div>
                <label htmlFor="showerExistence">
                  <input
                    type="radio"
                    id="showerExistence"
                    name="showerFacility"
                  />
                  유
                </label>
                <label htmlFor="showerNoexistence">
                  <input
                    type="radio"
                    id="showerNoexistence"
                    name="showerFacility"
                  />
                  무
                </label>
              </div>
            </OptionValueArea>
            <OptionParkingArea>
              주차장
              <div>
                <label htmlFor="parkinExistence">
                  <input type="radio" id="parkinExistence" name="parking" />유
                </label>
                <label htmlFor="parkingNoexistence">
                  <input type="radio" id="parkingNoexistence" name="parking" />
                  무
                </label>
              </div>
            </OptionParkingArea>
            <OptionValueArea>
              장비대여
              <div>
                <label htmlFor="rentalExistence">
                  <input type="radio" id="rentalExistence" name="rentalEquip" />
                  유
                </label>
                <label htmlFor="rentalNoexistence">
                  <input
                    type="radio"
                    id="rentalNoexistence"
                    name="rentalEquip"
                  />
                  무
                </label>
              </div>
            </OptionValueArea>
          </OptionArea>
          <LongTextInput type="text" placeholder="기타편의시설" />
          <DescriptionInput type="text" placeholder="설명" />
          <AddButton onClick={addCourt}>등록하기</AddButton>
        </Content>
      </ModalSection>
    </Container>
  );
});

const COURT_TYPE = [
  { type: "clay" },
  { type: "hard" },
  { type: "grass" },
  { type: "carpet" },
  { type: "wood" },
  { type: "rubber" },
];

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(40, 40, 40, 0.8);
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalSection = styled.div`
  height: 800px;
  padding: 40px;
  border-radius: 16px;
  background-color: #f1f1f1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 20px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${props => props.theme.lightGray};
  }
`;

const ClosedButton = styled.button`
  width: 30px;
  padding: 5px;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50%;
  background-color: white;
  font-size: ${props => props.theme.sm.fontSize};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 450px;
`;

const Title = styled.div`
  text-align: center;
  padding-bottom: 24px;
  font-size: ${props => props.theme["2xl"].fontSize};
`;

const ImgPreview = styled.img`
  width: 450px;
  height: 300px;
  background-color: ${props => (props.src ? "" : "lightGray")};
`;

const UploadInput = styled.input`
  width: 450px;
  height: 40px;
  padding: 7px 0 0 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const InputArea = styled.div`
  display: flex;
  gap: 10px;
`;

const TextInput = styled.input`
  width: 220px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

const LongTextInput = styled(TextInput)`
  width: 450px;
`;

const TypeArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 450px;
  height: 70px;
  padding-top: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const TypeValueArea = styled.div`
  display: flex;
  gap: 10px;

  & > label > input[type="radio"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid ${props => props.theme.green};
    border-radius: 3px;
  }

  & > label > input[type="radio"]:checked {
    width: 15px;
    height: 15px;
    background-image: url("/images/CheckBox/checked.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const OptionArea = styled.div`
  display: flex;
  gap: 30px;
  width: 450px;
  height: 70px;
  padding: 0 25px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const OptionValueArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100px;
  padding-top: 10px;

  & > div > label > input[type="radio"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid ${props => props.theme.green};
    border-radius: 3px;
  }

  & > div > label > input[type="radio"]:checked {
    width: 15px;
    height: 15px;
    background-image: url("/images/CheckBox/checked.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const OptionParkingArea = styled(OptionValueArea)`
  width: 160px;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const DescriptionInput = styled.input`
  width: 450px;
  height: 100px;
  padding-left: 10px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

const AddButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  background-color: #89b922;
  font-size: 12px;
  color: white;
  &:hover {
    background-color: #a1db26;
  }
`;
