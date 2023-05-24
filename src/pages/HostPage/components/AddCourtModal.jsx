import React, { useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
// import AWS from "aws-sdk";
import { apiClient } from "../../../utils";

export default NiceModal.create(() => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewFile, setPreviewFile] = useState("");

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
  const addCourt = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", selectedFile.name);

    try {
      await apiClient.post(`http://10.58.52.234:3000/courts`, {
        formData: formData,
        name: "a",
        address: "a",
        price: "a",
      });
    } catch (error) {
      console.error("PATCH 요청 실패:", error);
    }

    // const addCourt = async file => {
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("name", file.name);

    // const S3_BUCKET = "court-img-upload";
    // const REGION = "ap-northeast-2";
    // const ACCESS_KEY_ID = "AKIA3AH5NN4HX7Y4Y6A7";
    // const SECRET_ACCESS_KEY = "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";

    // AWS.config.update({
    //   region: REGION,
    //   accessKeyId: ACCESS_KEY_ID,
    //   secretAccessKey: SECRET_ACCESS_KEY,
    // });

    // const s3 = new AWS.S3();

    // try {
    //   const params = {
    //     Bucket: S3_BUCKET,
    //     Key: `upload/${file.name}`,
    //     Body: formData.get("file"),
    //     ACL: "public-read",
    //   };

    //   const response = await s3.upload(params).promise();
    //   console.log("File uploaded successfully:", response.Location);
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    // }
    modal.remove();
    document.body.style.overflow = "unset";
  };

  return (
    <Container>
      <ModalSection>
        <ClosedButton onClick={closedModal}>X</ClosedButton>
        <Content>
          <Title>등록하기</Title>
          <ImgPreview src={previewFile} alt="코트장 이미지" />
          <UploadInput
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <LongTextInput type="text" placeholder="코트장명" />
          <InputArea>
            <TextInput type="text" placeholder="강북/강남" />
            <TextInput type="text" placeholder="자치구" />
          </InputArea>
          <LongTextInput type="text" placeholder="주소" />
          <InputArea>
            <TextInput type="text" placeholder="금액" />
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
          {/* <AddButton onClick={() => addCourt(selectedFile[0])}> */}
          <AddButton onClick={addCourt}>등록하기</AddButton>
        </Content>
      </ModalSection>
      {/* <img src="https://court-img-upload.s3.ap-northeast-2.amazonaws.com/upload/Level1.jpeg" /> */}
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
  background-color: #f1f1f1;
  padding: 40px;
  border-radius: 16px;
`;

const ClosedButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  width: 30px;
  font-size: ${props => props.theme.sm.fontSize};
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 450px;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
  text-align: center;
  padding-bottom: 24px;
`;

const ImgPreview = styled.img`
  /* width: 450px; */
  /* height: 300px; */
  /* border: 1px solid black; */
`;

const UploadInput = styled.input`
  border: 1px solid black;
  width: 450px;
  height: 40px;
  padding: 7px 0 0 10px;
  background-color: white;
  border-radius: 10px;
`;

const InputArea = styled.div`
  display: flex;
  gap: 10px;
`;

const TextInput = styled.input`
  width: 220px;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  border: 1px solid black;
`;

const LongTextInput = styled(TextInput)`
  width: 450px;
`;

const TypeArea = styled.div`
  width: 450px;
  height: 70px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  border-radius: 10px;
  background-color: white;
`;

const TypeValueArea = styled.div`
  display: flex;
  gap: 10px;
`;

const OptionArea = styled.div`
  width: 450px;
  height: 70px;
  padding: 0 25px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  gap: 30px;
  border: 1px solid black;
`;

const OptionValueArea = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
`;

const OptionParkingArea = styled(OptionValueArea)`
  border-left: 1px solid black;
  border-right: 1px solid black;
  width: 160px;
`;

const DescriptionInput = styled.input`
  width: 450px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-bottom: 50px;
  border: 1px solid black;
`;

const AddButton = styled.button`
  background-color: #89b922;
  color: white;
  width: 100px;
  border-radius: 30px;
  height: 50px;
  font-size: 12px;
  &:hover {
    background-color: #a1db26;
  }
`;
