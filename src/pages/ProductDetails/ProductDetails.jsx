import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import ProductTitle from "./components/ProductTitle";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductLocation from "./components/ProductLocation";
import ProductReserve from "./components/ProductReserve";

const dataURL = "http://10.58.52.232:3000";
// const dataURL = "data/courtData.json";

const ProductDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courtData, setCourtData] = useState({});
  const [userData, setUserData] = useState({});

  const courtId = 1;
  const getDate = "2023-05-30";

  // const courtId = searchParams.get("courtId");
  // const getDate = searchParams.get("date");
  const getTime = searchParams.get("time");

  const dateFormat = date => {
    if (!date) return;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  };

  const [startDate, setStartDate] = useState(dateFormat(new Date()));

  // useEffect(() => {
  //   axios.get(dataURL).then(response => {
  //     if (response.data) {
  //       setCourtData(response.data);
  //     }
  //   });
  // });

  // 메인에서 court 데이터 받아올 때

  useEffect(() => {
    // getDate && setStartDate(getDate);
    axios
      .get(`${dataURL}/courts?courtId=${courtId}&dateForCourt=${getDate}`)
      .then(response => {
        setCourtData(response.data);
      });
  }, [startDate]);

  const [reserveData, setReserveData] = useState({
    courtId: courtId,
    timeSlot: "",
    isMatch: "",
    amount: "",
  });

  if (!courtData.type) return;

  return (
    <Background>
      <ProductWrapper>
        <ProductTitle courtData={courtData[0]} />
        <ProductImages courtData={courtData[0]} />
        <ContentsFlex>
          <ProductInfo courtData={courtData[0]} />
          <ProductReserve
            courtData={courtData[0]}
            startDate={startDate}
            setStartDate={setStartDate}
            setReserveData={setReserveData}
            reserveData={reserveData}
          />
        </ContentsFlex>
        <ProductLocation courtData={courtData[0]} />
      </ProductWrapper>
    </Background>
  );
};

export default ProductDetails;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 100px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const ContentsFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;

  @media screen and (max-width: 1280px) {
    align-items: center;
    justify-content: space-around;
    width: 80%;
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;
