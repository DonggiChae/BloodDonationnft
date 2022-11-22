import styled from "styled-components";

const Container = styled.div`
  height: 250px;
  width: 200px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  background-color: rgba(236, 187, 183, 0.3);
  border-radius: 10px;
`;

const ImgWrapper = styled.img``;
const TitleWrapper = styled.div``;
const ContentsWrapper = styled.div``;

export default function Card() {
  return (
    <Container>
      <ImgWrapper />
      <TitleWrapper>Title</TitleWrapper>
      <ContentsWrapper>ID:</ContentsWrapper>
      <ContentsWrapper>설명:헌혈종류</ContentsWrapper>
      <ContentsWrapper>장소:</ContentsWrapper>
      <ContentsWrapper>발급일자:</ContentsWrapper>
    </Container>
  );
}
