import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { getRequestPage } from "../../graphql/queries";

import Button from "../atoms/Button";
import RequestUpdate from "./RequestUpdate";

const Table = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  border: none;
  resize: none;
  width: 100%;
  padding: 0.7rem 1rem;
  line-height: 1.5;
  font-size: 1.1em;
  font-weight: 600;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
`;

const Text = styled.div``;

const Title = styled.h3`
  padding-right: 20px;
`;

const EmptyBox = styled.div``;

const StyledTextarea = styled.div`
  width: 100%;
  height: 45%;
  margin-left: 8px;
  line-height: 1.5;
  padding: 0.7rem 1rem;
  font-size: 1.1em;
  font-weight: 600;
  border: none;
  resize: none;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
`;

const TableBottom = styled.div`
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 1fr 5fr 1fr;
`;

export default function RequestDetail() {
  const { contentId } = useParams();
  const navigate = useNavigate();
  const [requestState, setRequestState] = useState([]);
  const [updateState, setUpdateState] = useState(false);
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    const getRequest = async () => {
      const res = await API.graphql({
        query: getRequestPage,
        variables: { id: contentId },
      });
      setRequestState(res.data.getRequestPage);
      console.log(res);
    };
    getRequest();
  }, [contentId]);

  return (
    <Table>
      {updateState ? (
        <RequestUpdate setUpdateState={setUpdateState} />
      ) : (
        <>
          <TextWrapper>
            <Title>제목:</Title>
            <Text name="title">{requestState.title}</Text>
          </TextWrapper>
          <TextWrapper>
            <Title>지갑주소:</Title>
            <Text name="walletAddr">{requestState.walletAddr}</Text>
          </TextWrapper>
          <StyledTextarea name="description">
            {requestState.description}{" "}
          </StyledTextarea>
          <TableBottom>
            <Button title={"뒤로가기"} onClick={() => navigate(-1)} />
            <EmptyBox></EmptyBox>
            {user && user.username === requestState.user && (
              <Button title={"수정하기"} onClick={() => setUpdateState(true)} />
            )}
          </TableBottom>
        </>
      )}
    </Table>
  );
}
