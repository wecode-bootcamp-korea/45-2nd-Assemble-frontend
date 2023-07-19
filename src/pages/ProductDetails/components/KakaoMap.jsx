import React, { useEffect, useState } from "react";
import styled from "styled-components";
const { kakao } = window;

const KakaoMap = ({ courtData }) => {
  const {latitude, longitude, courtName} = courtData[0];
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    let coords = new kakao.maps.LatLng(latitude, longitude);

    const imageSrc = "/images/map/makerImage.png",
      imageSize = new kakao.maps.Size(64, 69),
      imageOption = { offset: new kakao.maps.Point(27, 69) };

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let marker = new kakao.maps.Marker({
      map: map,
      position: coords,
      image: markerImage,
    });

    let content = `<div style=" padding: 10px; width:auto; color:white; background:#89B922; border-radius:5px; border:1px solid white; box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);">${courtName}</div>`

    let customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      content: content,
      position: coords,
			xAnchor: 0.5, 
			yAnchor: 2.9 
    });


    map.setCenter(coords);
  }, [windowSize]);

  return <Location id="map" />;
};

export default KakaoMap;

const Location = styled.div`
  width: 100%;
  height: 40vw;
  border: 1px solid black;
`;

const LocationName = styled.div`
  width: auto;
  height: auto;
`