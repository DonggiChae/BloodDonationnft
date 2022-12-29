import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

import Input from "../atoms/Input";
import Button from "../atoms/Button";
import SelectionInput from "../atoms/SelectionInput";
import SelectionInputArry from "../atoms/SelectionInputArry";

const Container = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  font-size: 1.3em;
  font-weight: 600;
  margin: 10px;
`;
const Form = styled.form``;
const SelectionInputWrapper = styled.div`
  margin: 10px;
`;

export default function MintMethodsContainer({ title, method }) {
  const [state, setState] = useState({
    title: "헌혈증",
    location: "",
    description: "",
    account: "",
  });

  const [locationState, setLocationState] = useState([]);

  const description = ["전혈", "혈장", "혈소판", "혈장+혈소판"];
  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    method(state.title, state.location, state.description, state.account).then(
      () => e.target.reset()
    );
  };

  const getLocation = () =>
    axios
      .get(
        "https://api.odcloud.kr/api/15050729/v1/uddi:e747bbad-2d92-40eb-912d-b9824ca52dbd?page=1&perPage=146&serviceKey=dRQVAAyZguxZAIpnSFLolfv8ru1CB1Mo2SkML%2BFwJ278AmIud%2F7YPv0P2Jr%2FEkGenUhynq2TnM4btYYH1tkRkQ%3D%3D"
      )
      .then((res) => setLocationState(res.data.data));

  getLocation();
  return (
    <Container>
      <TitleWrapper>{title}</TitleWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          name="account"
          onChange={handleInputChange}
          placeholder={"받는 사람 지갑 주소"}
          required
        />
        <SelectionInputWrapper>
          <SelectionInput
            name="description"
            firstOption={"헌혈 종류"}
            selectList={description}
            onChange={handleInputChange}
          />
        </SelectionInputWrapper>
        <SelectionInputWrapper>
          <SelectionInputArry
            name="location"
            firstOption={"헌혈 장소"}
            selectList={locationState}
            onChange={handleInputChange}
            num={2}
          />
        </SelectionInputWrapper>
        <Button type="submit" title="확인" />
      </Form>
    </Container>
  );
}
