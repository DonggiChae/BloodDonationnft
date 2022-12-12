import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import MintMethodsContainer from "../organisms/MintMethodsContainer";
import mintBD from "../../ContractMethods/MintBD";

const Container = styled.div`
  margin-top: 150px;
`;
const TitleWrapper = styled.div`
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const FormWrapper = styled.div``;

const Form = styled.form`
  font-size: 16px;
`;
const InputWrapper = styled.div``;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const SubmitButton = styled.button``;

export default function MintNFTTemplate({ method }) {
  const [state, setState] = useState({
    title: "BloodDonation",
    location: "",
    description: "",
    to: null,
  });
  const { title, location, description, to } = state;

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    method(title, location, description, to);
  };
  return (
    <Container>
      <MintMethodsContainer title="헌혈증 발행" method={mintBD} />
    </Container>
  );
}
