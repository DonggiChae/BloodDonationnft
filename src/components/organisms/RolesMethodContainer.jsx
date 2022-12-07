import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

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

export default function RolesMethodContainer({ title, method, placeholder }) {
  const [state, setState] = useState({
    account: "",
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    method(state.account).then(() => e.target.reset());
  };
  return (
    <Container>
      <TitleWrapper>{title}</TitleWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          name="account"
          onChange={handleInputChange}
          placeholder={placeholder}
          required
        />
        <Button type="submit" title="확인" />
      </Form>
    </Container>
  );
}
