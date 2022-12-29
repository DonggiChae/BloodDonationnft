import { useState, useEffect } from "react";
import styled from "styled-components";

import Cards from "../organisms/Cards";
import Pagination from "../atoms/Pagination";
import Button from "../atoms/Button";
import TransferOwnerShipModal from "../organisms/TransferOwnerShipModal";

import transferOwnership from "../../ContractMethods/TransferOwnership";

const Container = styled.div`
  width: 100%;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  min-height: 490px;
  display: flex;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 1500px;
  border-radius: 20px;
`;
const CardWrapper = styled.div`
  min-height: 410px;
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

const ContentsWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  width: 800px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 2em;
  padding: 40px;
`;

const PaginationWrapper = styled.div`
  padding: 20px;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  height: 90%;
  margin-right: 30px;
  margin-top: 10px;
`;

const ModalWrapper = styled.div`
  position: absolute;
`;

export default function MyNFTTemplate({ feed }) {
  const [page, setPage] = useState(1);
  const limit = 20;

  const [sendingModalState, setSendingModalState] = useState(false);
  const handleModal = (state) => setSendingModalState(state);
  const [sendingNFTState, setSendingNFTState] = useState(false);
  const handleSendingNFT = (state) => setSendingNFTState(state);
  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  useEffect(() => {
    setSendingNFTState(false);
    setSendingModalState(false);
  }, [feed]);

  return (
    <Container>
      <TitleWrapper>
        <Title>나의 헌혈증</Title>
      </TitleWrapper>
      {sendingModalState && (
        <ModalWrapper>
          <TransferOwnerShipModal
            checkedList={checkedList}
            handleModal={handleModal}
            sendingModalState={sendingModalState}
            handleSendingNFT={handleSendingNFT}
            method={transferOwnership}
          />
        </ModalWrapper>
      )}
      {feed.length === 0 ? (
        <ContentsWrapper>
          <Contents>조회가능한 헌혈증이 없습니다.</Contents>
          <Contents>헌혈로 생명을 구해보시는건 어떤가요?</Contents>
        </ContentsWrapper>
      ) : (
        <Wrapper>
          <CardWrapper>
            <Cards
              feed={feed}
              limit={limit}
              page={page}
              setPage={setPage}
              sendingModalState={sendingNFTState}
              onCheckedElement={onCheckedElement}
              checkedList={checkedList}
            />
          </CardWrapper>
          <BottomWrapper>
            <PaginationWrapper>
              <Pagination
                page={page}
                totalPosts={feed.length}
                limit={limit}
                setPage={setPage}
              />
            </PaginationWrapper>
            {sendingNFTState ? (
              <ButtonWrapper>
                <Button
                  title={"헌혈증 보내기"}
                  onClick={() => {
                    handleModal(true);
                  }}
                />
                <Button
                  title={"취소하기"}
                  onClick={() => {
                    handleSendingNFT(false);
                    handleModal(false);
                  }}
                />
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>
                <Button
                  title={"헌혈증 보내기"}
                  onClick={() => {
                    handleSendingNFT(true);
                  }}
                />
              </ButtonWrapper>
            )}
          </BottomWrapper>
        </Wrapper>
      )}
    </Container>
  );
}
