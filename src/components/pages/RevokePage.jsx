import styled from "styled-components";
import RolesMethodContainer from "../organisms/RolesMethodContainer";
import {
  renounceAdmin,
  revokeHospitalRole,
  revokeRedCrossRole,
} from "../../ContractMethods/RolesMethods";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
`;

export default function RevokePage() {
  return (
    <Container>
      <RolesMethodContainer
        title={"적십자권한 취소하기"}
        method={revokeRedCrossRole}
        placeholedr={"설정할 지갑주소"}
      />
      <RolesMethodContainer
        title={"병원권한 취소하기"}
        method={revokeHospitalRole}
        placeholedr={"설정할 지갑주소"}
      />
      <RolesMethodContainer title={"관리자 포기하기"} method={renounceAdmin} />
    </Container>
  );
}
