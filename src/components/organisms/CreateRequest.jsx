import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { API } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createRequestPage } from "../../graphql/mutations";

import Button from "../atoms/Button";
import InputOnlyBorderBottom from "../atoms/InputOnlyBorderBottom";

const Table = styled.div`
  height: 100%;
`;

const Form = styled.form``;

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
  grid-template-columns: 6fr 1fr;
`;

export default function CreateRequest() {
  const { register, handleSubmit } = useForm();
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: "",
    description: "",
    state: "",
    walletAddr: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleTitleChange = (e) => {
    const { value, maxLength } = e.target;
    setState({ ...state, title: value.slice(0, maxLength) });
  };

  const handleNewRequest = () => {
    var d = new Date();
    API.graphql({
      query: createRequestPage,
      variables: {
        input: {
          title: state.title,
          description: state.description,
          at: new Date(
            d.getTime() - d.getTimezoneOffset() * 60000
          ).toISOString(),
          state: "요청중",
          walletAddr: state.walletAddr,
          user: user.username,
        },
      },
    })
      .then(() => {
        navigate("/requestdonation");
      })
      .catch((error) => {
        toast.error(error.errors[0].message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <Table>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputOnlyBorderBottom
          id="title"
          type="text"
          name="title"
          placeholder="제목"
          {...register("title", {
            required: true,
            minLength: 4,
            maxLength: 30,
          })}
        />
        <InputOnlyBorderBottom
          id="walletAddr"
          name="walletAddr"
          placeholder="나의 지갑주소"
          {...register("walletAddr", {
            required: true,
            minLength: 42,
            maxLength: 42,
          })}
        />
        <StyledTextarea
          id="description"
          name="description"
          placeholder="요청 내용"
          {...register("walletAddr", {
            required: true,
            minLength: 10,
            maxLength: 500,
          })}
        />
        <TableBottom>
          <Button title={"요청하기"} onClick={handleNewRequest} />
          <Button title={"취소"} onClick={() => navigate(-1)} />
        </TableBottom>
      </Form>
    </Table>
  );
}
