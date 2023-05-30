import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import ProductTitle from "./components/ProductTitle";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductLocation from "./components/ProductLocation";
import ProductReserve from "./components/ProductReserve";

const ProductDetails = () => {
  const [courtData, setCourtData] = useState(null);
  const dateFormat = date => {
    if (!date) return;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  };
  const [startDate, setStartDate] = useState(dateFormat(new Date()));

  useEffect(() => {
    axios.get(dataURL).then(response => {
      if (response.data) {
        setCourtData(response.data);
      }
    });
  }, []);

  if (!courtData) return;

  return (
    <Background>
      <ProductWrapper>
        <ProductTitle courtData={courtData} />
        <ProductImages courtData={courtData} />
        <ContentsFlex>
          <ProductInfo courtData={courtData} />
          <ProductReserve
            courtData={courtData}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        </ContentsFlex>
        <ProductLocation courtData={courtData} />
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
