import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./LocationPage.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const { kakao } = window;

export default function LocationPage() {
  const [redCrossData, setRedCrossData] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
      level: 12, // 지도의 확대 레벨
    };

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();

    axios
      .get(
        "https://api.odcloud.kr/api/15050729/v1/uddi:e747bbad-2d92-40eb-912d-b9824ca52dbd?page=1&perPage=146&serviceKey=dRQVAAyZguxZAIpnSFLolfv8ru1CB1Mo2SkML%2BFwJ278AmIud%2F7YPv0P2Jr%2FEkGenUhynq2TnM4btYYH1tkRkQ%3D%3D"
      )
      .then((res) => {
        const markers = res.data.data.map((data) => {
          geocoder.addressSearch(
            data[Object.keys(data)[1]],
            function (result, status) {
              // 정상적으로 검색이 완료됐으면
              if (status === kakao.maps.services.Status.OK) {
                const marker = new kakao.maps.Marker({
                  map: map,
                  position: new kakao.maps.LatLng(result[0].y, result[0].x),
                  clickable: true,
                });
                const infowindow = new kakao.maps.InfoWindow({
                  content: `
                  <div class="info-wrapper">
                    <ul >
                      <li class="info-li">
                      전화번호: ${data[Object.keys(data)[0]]}
                      </li>
                      <li class="info-li">
                      주소: ${data[Object.keys(data)[1]]}
                      </li>
                    </ul>
                  </div>`, // 인포윈도우에 표시할 내용
                });
                kakao.maps.event.addListener(
                  marker,
                  "mouseover",
                  makeOverListener(map, marker, infowindow)
                );
                kakao.maps.event.addListener(
                  marker,
                  "mouseout",
                  makeOutListener(infowindow)
                );
                return marker;
              }
            }
          );
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <MapWrapper ref={mapRef} />
    </Container>
  );
}
