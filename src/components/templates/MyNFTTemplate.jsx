import styled from "styled-components";
import Cards from "../organisms/Cards";

const Container = styled.div`
  width: 100%;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 1200px;
  margin: 30px;
`;
const Title = styled.div`
  font-size: 2.5em;
  text-align: left;
  padding-left: 100px;
  font-weight: 600;
`;

export default function MyNFTTemplate() {
  return (
    <Container>
      <TitleWrapper>
        <Title>나의 헌혈증</Title>
      </TitleWrapper>
      <Cards />
    </Container>
  );
}
