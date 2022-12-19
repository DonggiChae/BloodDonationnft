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
  padding-bottom: 10px;
  height: 60%;
  width: 100%;
`;
const ContentsWrapper = styled.div`
  width: 90%;
`;
const ContentsTitleWrapper = styled.div`
  font-weight: 600;
  padding-right: 5px;
  padding-bottom: 5px;
`;

const Contents = styled.div`
  display: flex;
`;
export default function Card({ contents }) {
  return (
    <Container>
      <ImgWrapper
        src={`https://gateway.pinata.cloud/ipfs/${contents[2].split("://")[1]}`}
      />
      <ContentsWrapper>
        <Contents>
          <ContentsTitleWrapper>ID:</ContentsTitleWrapper> {contents[0]}
        </Contents>
        <Contents>
          <ContentsTitleWrapper>헌혈 종류:</ContentsTitleWrapper>
          {contents[5]}
        </Contents>
        <Contents>
          <ContentsTitleWrapper>장소:</ContentsTitleWrapper> {contents[4]}
        </Contents>
        <Contents>
          <ContentsTitleWrapper>발행일:</ContentsTitleWrapper>
          {new Intl.DateTimeFormat("ko-KR").format(contents[6] * 1000)}
        </Contents>
      </ContentsWrapper>
      {/* <ContentsWrapper>NFT:{contents[1][0]}</ContentsWrapper> */}
    </Container>
  );
}
