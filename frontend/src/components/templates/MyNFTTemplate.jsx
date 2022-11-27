import styled from "styled-components";
import Cards from "../organisms/Cards";

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

export default function MyNFTTemplate() {
  return (
    <Container>
      <TitleWrapper>
        <Title>내 헌혈증</Title>
      </TitleWrapper>
      <Cards />
    </Container>
  );
}
