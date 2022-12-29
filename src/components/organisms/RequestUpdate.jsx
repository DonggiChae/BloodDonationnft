import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { API } from "aws-amplify";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { updateRequestPage } from "../../graphql/mutations";

import Button from "../atoms/Button";
import InputOnlyBorderBottom from "../atoms/InputOnlyBorderBottom";
import SelectionInput from "../atoms/SelectionInput";
import { useEffect } from "react";

const Table = styled.div`
  height: 100%;
`;
const StyledTextarea = styled.textarea`
  width: 98%;
  height: 40%;
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

const TableBottom = styled.div`
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 6fr 1fr;
`;

export default function RequestUpdate({ setUpdateState, requestState }) {
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

  const selectList = ["요청중", "완료"];
  const [selected, setSelected] = useState("요청중");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleUpdateRequest = () => {
    // var d = new Date();
    API.graphql({
      query: updateRequestPage,
      variables: {
        input: {
          title: state.title,
          description: state.description,
          // at: new Date(
          //   d.getTime() - d.getTimezoneOffset() * 60000
          // ).toISOString(),
          state: selected,
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

  useEffect(() => {
    setState(requestState);
  }, [requestState]);
  return (
    <Table>
      <TitleWrapper>
        <InputOnlyBorderBottomWrapper>
          <InputOnlyBorderBottom
            type="text"
            name="title"
            placeholder="제목"
            value={state.title}
            onChange={handleTitleChange}
            minlength="4"
            maxLength={30}
            required
          />
        </InputOnlyBorderBottomWrapper>
        <SelectionInputWrapper>
          <SelectionInput
            firstOption={"진행상태"}
            selectList={selectList}
            onChange={handleSelect}
            maxLength={10}
            required
          />
        </SelectionInputWrapper>
      </TitleWrapper>

      <InputOnlyBorderBottom
        name="walletAddr"
        placeholder="나의 지갑주소"
        value={state.walletAddr}
        onChange={handleChange}
        required
      />
      <StyledTextarea
        name="description"
        placeholder="요청 내용"
        value={state.description}
        maxLength={500}
        onChange={handleChange}
        required
      />
      <TableBottom>
        <Button title={"수정하기"} onClick={handleUpdateRequest} />
        <Button title={"취소"} onClick={() => setUpdateState(false)} />
      </TableBottom>
    </Table>
  );
}
