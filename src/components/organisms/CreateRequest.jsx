import React, { useState } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

import { API } from "aws-amplify";
import { createRequestPage } from "../../graphql/mutations";

import Button from "../atoms/Button";
import InputOnlyBorderBottom from "../atoms/InputOnlyBorderBottom";

const Table = styled.div`
  height: 100%;
`;

const StyledTextarea = styled.textarea`
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
  &:focus {
    outline: none;
    border-bottom: 1.8px solid ${({ theme }) => theme.colors.buttonOrange};
  }
  &::placeholder {
    font-size: 1.1em;
  }
`;

const TableBottom = styled.div`
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 2fr 5fr 2fr 1fr;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function CreateRequest() {
  const [state, setState] = useState({
    title: "",
    description: "",
    state: "",
    walletAddr: "",
    at: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleNewRequest = () => {
    API.graphql({
      query: createRequestPage,
      variables: {
        input: {
          title: state.title,
          description: state.description,
          at: Date.now().toISOString(),
          state: "요청중",
          walletAddr: state.walletAddr,
        },
      },
    }).then(() => {
      Navigate("/requestdonation");
    });
  };
  return (
    <Table>
      <InputOnlyBorderBottom
        name="title"
        placeholder="제목"
        onChange={handleChange}
      />
      <InputOnlyBorderBottom
        name="walletAddr"
        placeholder="나의 지갑주소"
        onChange={handleChange}
      />

      <StyledTextarea
        name="description"
        placeholder="요청 내용"
        onChange={handleChange}
      />

      <TableBottom>
        <StyledLink to="/requestdonation/createRequest">
          <Button title={"요청하기"} onClick={handleNewRequest} />
        </StyledLink>
      </TableBottom>
    </Table>
  );
}
