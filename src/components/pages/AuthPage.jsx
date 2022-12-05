import { useState } from "react";
import styled from "styled-components";

import SignIn from "../auth/SignIn";

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function AuthPage() {
  const [loginState, setLoginState] = useState(true);
  return (
    <AuthContainer>
      <SignIn />
    </AuthContainer>
  );
}

export default AuthPage;
