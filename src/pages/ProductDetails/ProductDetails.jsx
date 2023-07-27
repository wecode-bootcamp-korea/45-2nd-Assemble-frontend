import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import MainLayout from "../../components/Layout/MainLayout";
import ProductTitle from "./components/ProductTitle";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductLocation from "./components/ProductLocation";
import ProductReserve from "./components/ProductReserve";
import { dateFormat } from "../../utils/function";
import MobileNav from "../../components/Nav/MobileNav";

const ProductDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courtData, setCourtData] = useState([]);

  const courtId = searchParams.get("courtId");
  const getDate = searchParams.get("date");
  const getTime = searchParams.get("time");

  const [startDate, setStartDate] = useState(dateFormat(new Date()));
  // const dateForCourt = !getDate ? startDate : getDate; // 배포할 때는 필요없음
  const dateForCourt = `2023-06-05`; // 배포할 때 고정값

  const getCourtData = async ()  => {
    await axios.get(
        `${process.env.REACT_APP_API_URL}/courts?courtId=${courtId}&dateForCourt=${dateForCourt}`
      )
      .then(response => {
        setCourtData(response.data);
      });
  } 

  useEffect(() => {
    getCourtData();
  }, [startDate]);

  if (!courtData[0]) return;

  return (
    <MainLayout>
      <Background>
        <MobileNav />
        <ProductWrapper>
          <ProductTitle courtData={courtData[0]} />
          <ProductImages courtData={courtData[0]} />
          <ContentsFlex>
            <ProductInfo courtData={courtData[0]} />
            <ProductReserve
              courtData={courtData[0]}
              dateForCourt={dateForCourt}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          </ContentsFlex>
          <ProductLocation courtData={courtData[0]} />
        </ProductWrapper>
      </Background>
    </MainLayout>
  );
};

export default ProductDetails;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

    @media screen and (min-width: 551px) {
    > :first-child {
      display: none;
    }
  }

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
