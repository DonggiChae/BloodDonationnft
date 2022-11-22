
import styled from "styled-components";
import ConnectToKaikas from "../components/auth/ConnectToKaikas";

const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function AuthPage() {
  return (
    <AuthContainer>
      <ConnectToKaikas />
    </AuthContainer>
  );
}

export default AuthPage;
