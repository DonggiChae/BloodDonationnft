import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { getRequestPage } from "../../graphql/queries";

import Button from "../atoms/Button";
import RequestUpdate from "./RequestUpdate";

const Table = styled.div`
  height: 100%;
  display: flex;
`;

const Text = styled.div`
  border: none;
  resize: none;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
`;

const StyledTextarea = styled.div`
  width: 98%;
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
  grid-template-columns: 6fr 1fr;
`;

export default function RequestDetail() {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [updateState, setUpdateState] = useState(false);

  useEffect(() => {
    const queryParams = {
      sortDirection: "DESC",
    };
    const getRequest = async () => {
      const res = await API.graphql(
        {
          query: getRequestPage,
          variables: { id: navigate },
        },
        queryParams
      );
      setState(res.data.getRequestPage.items);
    };
    getRequest();
  }, []);

  return (
    <Table>
      <Text name="title" placeholder={state.title} />
      <Text name="walletAddr" placeholder={state.walletAddr} />
      <StyledTextarea name="description" placeholder={state.description} />
      <TableBottom>
        <Button title={"뒤로가기"} onClick={() => navigate(-1)} />
      </TableBottom>
    </Table>
  );
}
