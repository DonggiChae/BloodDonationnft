import styled from "styled-components";
import Card from "../molecules/Card";

const Container = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 80%;
  margin: 30px;
`;
const Title = styled.div`
  font-size: 2em;
  text-align: left;
  padding-left: 30px;
`;

const Parent = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  align-items: stretch;
`;

export default function MyNFTTemplate() {
  return (
    <Container>
      <TitleWrapper>
        <Title>내 헌혈증</Title>
      </TitleWrapper>
      <Parent>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Parent>
    </Container>
  );
}
