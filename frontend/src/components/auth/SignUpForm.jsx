import React, { useState } from "react";
import caver from "../../klaytn/caver";
import Input from "../Input";
import Button from "../Button";
import styled from "styled-components";

const SignUpFormContainer = styled.div`
  width: 100%;
`;

function SignUpForm() {
  const [state, setState] = useState({
    privateKey: null,
    address: null,
  });

  const generatePrivateKey = () => {
    const newKey = caver.wallet.keyring.generateSingleKey();
    const keyringFromPrivateKey =
      caver.wallet.keyring.createFromPrivateKey(newKey);
    console.log(`new private key: ${newKey}`);
    console.log(keyringFromPrivateKey);
    setState({
      ...state,
      privateKey: newKey,
      address: keyringFromPrivateKey._address,
    });
  };

  const { privateKey, address } = state;

  return (
    <SignUpFormContainer>
      <Input
        placeholder="Generate Private Key to Sign up"
        value={privateKey || ""}
        label="Private key"
        readOnly
      />
      <Input
        placeholder="Generate Address to Sign up"
        value={address || ""}
        label="Address"
        readOnly
      />
      <Button title="Generate Private key" onClick={generatePrivateKey} />
    </SignUpFormContainer>
  );
}

export default SignUpForm;
