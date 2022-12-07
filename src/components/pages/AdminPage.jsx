import styled from "styled-components";
import RolesMethodContainer from "../organisms/RolesMethodContainer";
import {
  addAdmin,
  renounceAdmin,
  grantHospitalRole,
  grantRedCrossRole,
} from "../../ContractMethods/RolesMethods";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
`;

export default function AdminPage() {
  return (
    <Container>
      <RolesMethodContainer
        title={"적십자 추가하기"}
        method={grantRedCrossRole}
        placeholedr={"설정할 지갑주소"}
      />
      <RolesMethodContainer
        title={"병원 추가하기"}
        method={grantHospitalRole}
        placeholedr={"설정할 지갑주소"}
      />

      <RolesMethodContainer title={"관리자 추가하기"} method={addAdmin} />
      <RolesMethodContainer title={"관리자 포기하기"} method={renounceAdmin} />
    </Container>
  );
}
