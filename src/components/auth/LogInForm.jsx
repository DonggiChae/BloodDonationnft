import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isValidPrivateKey } from "../../utils/crypto";
import Input from "../Input";
import Button from "../Button";

import * as authReducer from "../../redux/reducers/auth";

function LogInForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    privateKey: "",
    address: "",
    warningMessage: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { privateKey, address } = state;
    isValidPrivateKey(privateKey)
      ? dispatch(authReducer.setUser(address))
      : setState({ warningMessage: "* Invalid Private Key" });
  };

  const { warningMessage } = state;
  return (
    <div className="LoginForm">
      <Input
        type="password"
        name="address"
        label="Login with address"
        placeholder="0x2c4078447..."
        onChange={handleChange}
        err={warningMessage}
      />
      <Input
        type="password"
        name="privateKey"
        label="Login with Private Key"
        placeholder="0x2c4078447..."
        onChange={handleChange}
        err={warningMessage}
      />
      <Button title="Log in" onClick={handleLogin} />
    </div>
  );
}

export default LogInForm;
