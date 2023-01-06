import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { API } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { updateRequestPage, deleteRequestPage } from "../../graphql/mutations";

import Button from "../atoms/Button";

const Table = styled.div`
  height: 100%;
  .inputWrapper {
    position: relative;
    margin: 10px;
  }
  .input_bottomBorder {
    display: block;
    width: 100%;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    line-height: 1.5;
    border: none;
    border-radius: 0px;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
    font-size: 1.1em;
    font-weight: 600;
    &:focus {
      outline: none;
      border-bottom: 1.8px solid ${({ theme }) => theme.colors.buttonOrange};
    }
  }
  .input_submit {
    margin: 10px;
    padding: 0.375rem 0.75rem;
    border: 1.5px solid rgba(0, 0, 0, 1);
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 600;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: $dark-brown;
      color: $white;
    }
  }
  .StyledTextarea {
    width: 98%;
    height: 280px;
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
  }
  .select_state {
    display: block;
    width: 90%;
    padding: 0.7rem 1rem;
    margin: 1rem 0;
    line-height: 1.5;
    border: 1.5px solid rgba(0, 0, 0, 1);
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 600;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
`;

const InputOnlyBorderBottomWrapper = styled.div`
  width: 500px;
`;

const SelectionInputWrapper = styled.div`
  width: 150px;
`;

const ErrorMsg = styled.span`
  position: absolute;
  top: 35px;
  left: 20px;
  color: red;
  font-size: 12px;
  z-index: 10;
  height: 10px;
  margin: 0;
  padding: 0;
`;

const ErrorMsgTextBox = styled.span`
  position: absolute;
  top: 260px;
  left: 20px;
  color: red;
  font-size: 12px;
  z-index: 10;
  height: 10px;
  margin: 0;
  padding: 0;
`;

const TableBottom = styled.div`
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 6fr 1fr 1fr;
`;

export default function RequestUpdate({ setUpdateState, requestState }) {
  const { contentId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue,
  } = useForm();
  const { user } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const [version, setVersion] = useState();

  const selectList = ["요청중", "완료"];

  const deletedRequestPage = () =>
    API.graphql({
      query: deleteRequestPage,
      variables: {
        input: {
          id: contentId,
          _version: version,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })
      .then(() => {
        navigate("/requestdonation");
      })
      .catch((error) => {
        toast.error(error.errors[0].message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });

  const onSubmit = (data) => {
    // var d = new Date();
    API.graphql({
      query: updateRequestPage,
      variables: {
        input: {
          id: contentId,
          title: data.title,
          description: data.description,
          // at: new Date(
          //   d.getTime() - d.getTimezoneOffset() * 60000
          // ).toISOString(),
          state: data.state,
          walletAddr: data.walletAddr,
          user: user.username,
          _version: data._version,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
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

  useEffect(() => {
    setValue("title", requestState.title);
    setValue("description", requestState.description);
    setValue("walletAddr", requestState.walletAddr);
    setValue("state", requestState.state);
    setValue("_version", requestState._version);
    setVersion(requestState._version);
  }, [requestState]);
  return (
    <Table>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleWrapper>
          <InputOnlyBorderBottomWrapper>
            <div className="inputWrapper">
              <input
                className="input_bottomBorder"
                id="title"
                type="text"
                placeholder="제목"
                {...register("title", {
                  required: true,
                  minLength: {
                    value: 4,
                    message: "글자수가 부족합니다.",
                  },
                  maxLength: {
                    value: 30,
                    message: "글자수가 많습니다.",
                  },
                })}
              />
              <ErrorMsg>{errors?.title && errors?.title?.message}</ErrorMsg>
            </div>
          </InputOnlyBorderBottomWrapper>
          <SelectionInputWrapper>
            <select
              className="select_state"
              id="state"
              {...register("state", {
                required: true,
              })}
            >
              <option>{"진행상태"}:</option>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </SelectionInputWrapper>
        </TitleWrapper>
        <div className="inputWrapper">
          <input
            className="input_bottomBorder"
            id="walletAddr"
            placeholder="나의 지갑주소"
            {...register("walletAddr", {
              required: true,
              minLength: {
                value: 42,
                message: "글자수가 부족합니다.",
              },
              maxLength: {
                value: 42,
                message: "글자수가 많습니다.",
              },
            })}
          />
          <ErrorMsg>
            {errors?.walletAddr && errors?.walletAddr?.message}
          </ErrorMsg>
        </div>
        <div className="inputWrapper">
          <textarea
            className="StyledTextarea"
            id="description"
            placeholder="요청 내용"
            {...register("description", {
              required: true,
              minLength: {
                value: 10,
                message: "글자수가 부족합니다.",
              },
              maxLength: {
                value: 500,
                message: "글자수가 많습니다.",
              },
            })}
          />
          <ErrorMsgTextBox>
            {errors?.description && errors?.description?.message}
          </ErrorMsgTextBox>
        </div>
        <TableBottom>
          <input
            className="input_submit"
            value={"수정하기"}
            type="submit"
            disabled={isSubmitting}
          />
          <Button title={"삭제"} onClick={() => deletedRequestPage()} />
          <Button title={"취소"} onClick={() => setUpdateState(false)} />
        </TableBottom>
      </form>
    </Table>
  );
}
