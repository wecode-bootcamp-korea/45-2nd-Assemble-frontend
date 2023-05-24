import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ReservationCard from "./components/ReservationCard";

const ReservationStatusPage = () => {
  const [reservationList, setReservationList] = useState([]);
  const [currentTab, setCurrentTab] = useState("전체");
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = () => {
    if (currentTab === "전체") {
      searchParams.delete("isExpired");
      searchParams.delete("isMatch");
    } else if (currentTab === "일반") {
      searchParams.set("isExpired", "0");
      searchParams.set("isMatch", "0");
    } else if (currentTab === "매치(Host)") {
      searchParams.set("isExpired", "0");
      searchParams.set("isMatch", "1");
    } else if (currentTab === "매치(Guest)") {
      searchParams.delete("isMatch");
      searchParams.set("isExpired", "0");
    }
    setSearchParams(searchParams);
  };

  const token = localStorage.getItem("TOKEN");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const normalRes = await axios.get(
          // "/data/scheduledData/hostNormal.json",
          "http://10.58.52.234:3000/reservations/host?isExpired=0&isMatch=0",
          config
        );
        const normalData = normalRes.data;

        const matchHostRes = await axios.get(
          // "/data/scheduledData/hostMatching.json",
          "http://10.58.52.234:3000/reservations/host?isExpired=0&isMatch=1",
          config
        );
        const matchHostData = matchHostRes.data;

        const matchGuestRes = await axios.get(
          // "/data/scheduledData/guest.json",
          "http://10.58.52.234:3000/matches/guest?isExpired=0",
          config
        );
        const matchGuestData = matchGuestRes.data;

        let typeSelect = [];

        if (currentTab === "일반") {
          typeSelect = normalData.data;
          setParams();
        } else if (currentTab === "매치(Host)") {
          typeSelect = matchHostData.data;
          setParams();
        } else if (currentTab === "매치(Guest)") {
          setParams();
          typeSelect = matchGuestData.data;
        } else if (currentTab === "전체") {
          const matchData = [
            ...normalData.data,
            ...matchHostData.data,
            ...matchGuestData.data,
          ];
          typeSelect = matchData.sort(
            (a, b) =>
              new Date(a.reservation.timeSlot) -
              new Date(b.reservation.timeSlot)
          );
          setParams();
        }

        setReservationList(typeSelect);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentTab]);

  return (
    <Container>
      <Title>예약현황</Title>
      <Tabs className="tabs">
        {TAB_ARR.map(item => (
          <Tab
            key={item.id}
            title={item.title}
            onClick={() => setCurrentTab(item.title)}
          >
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <ReservationList>
        {reservationList.map(item => (
          <ReservationCard key={item.reservation.id} {...item} />
        ))}
      </ReservationList>
    </Container>
  );
};

export default ReservationStatusPage;

const TAB_ARR = [
  { id: 1, title: "전체" },
  { id: 2, title: "일반" },
  { id: 3, title: "매치(Host)" },
  { id: 4, title: "매치(Guest)" },
];

const Container = styled.div`
  padding: 40px 0px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 40px 0 20px 0;
`;

const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 60px 0 40px;
`;
const Tab = styled.li`
  width: 200px;
  height: 60px;
  padding-top: 22.5px;
  background-color: ${props => props.theme.green};
  color: white;
  font-size: 20px;
  ${props => {
    switch (props.title) {
      case "전체":
        return `
          border-bottom-left-radius: 20px;
          border-top-left-radius: 20px;
        `;
      case "일반":
        return `
          border-left:1px solid ${props.theme.lightGray};
          border-right:1px solid ${props.theme.lightGray};
        `;
      case "매치(Host)":
        return `
          border-right:1px solid ${props.theme.lightGray};
        `;
      case "매치(Guest)":
        return `
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
        `;
      default:
        return `
          border-radius: none;
        `;
    }
  }}
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const ReservationList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 450px;
  grid-gap: 16px;
  @media screen and (max-width: 928px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 450px;
    grid-gap: 8px;
  }
  @media screen and (max-width: 642px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 450px;
    grid-gap: 4px;
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 500px;
    grid-row-gap: 16px;
  }
`;
