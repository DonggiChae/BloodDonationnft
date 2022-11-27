import styled from "styled-components";

const Container = styled.div`
  height: 350px;
  width: 250px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  background-color: rgba(236, 187, 183, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgWrapper = styled.img`
  padding: 15px;
  height: 60%;
  width: 90%;
`;
const TitleWrapper = styled.div``;
const ContentsWrapper = styled.div``;

export default function Card({ contents }) {
  console.log(
    contents,
    `https://gateway.pinata.cloud/ipfs/${contents[2].split("://")[1]}`
  );
  return (
    <Container>
      <ImgWrapper
        src={`https://gateway.pinata.cloud/ipfs/${contents[2].split("://")[1]}`}
      />
      <TitleWrapper>{contents[3]}</TitleWrapper>
      <ContentsWrapper>ID: {contents[0]}</ContentsWrapper>
      <ContentsWrapper>설명:{contents[5]}</ContentsWrapper>
      <ContentsWrapper>장소: {contents[4]}</ContentsWrapper>
      <ContentsWrapper>
        발급일자:{new Intl.DateTimeFormat("ko-KR").format(contents[6] * 1000)}
      </ContentsWrapper>
      {/* <ContentsWrapper>NFT:{contents[1][0]}</ContentsWrapper> */}
    </Container>
  );
}
