import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { mainCourtListAtom } from "../../../recoil/mainCourtListAtom";
import CardOfMain from "./Card/CardOfMain";

const { kakao } = window;

const Map = () => {
  const courtList = useRecoilValue(mainCourtListAtom);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showCard, setShowCard] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    let center = new kakao.maps.LatLng(
      courtList[0]?.latitude,
      courtList[0]?.longitude
    );

    let container = document.getElementById("map"),
      option = {
        center,
        level: 8,
      };

    let map = new kakao.maps.Map(container, option);

    courtList.forEach(item => {
      const imageSrc = "/images/map/makerImage.png",
        imageSize = new kakao.maps.Size(64, 69),
        imageOption = { offset: new kakao.maps.Point(27, 69) };

      const image = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      let marker = new kakao.maps.Marker({
        map,
        image,
        position: new kakao.maps.LatLng(item.latitude, item.longitude),
      });

      // let infowindow = new kakao.maps.InfoWindow({ // 장소명 표시
      // map,
      // content: item.courtName,
      // });
      // infowindow.open(map, marker);

      map.setCenter(center);
      kakao.maps.event.addListener(marker, "click", () =>
        setShowCard(prev => (prev === item.courtId ? 0 : item.courtId))
      );
    });
  }, [courtList, windowSize]);

  return (
    <div>
      <KakaoMap id="map">
        {!!showCard && (
          <Card>
            <CardOfMain
              item={courtList.find(item => item.courtId === showCard)}
            />
          </Card>
        )}
      </KakaoMap>
    </div>
  );
};

export default Map;

const KakaoMap = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
`;

const Card = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 300px;
  z-index: 10;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
`;
