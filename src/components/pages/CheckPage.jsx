import React from "react";
import styled from "styled-components";
import RolesMethodContainer from "../organisms/RolesMethodContainer";
import {
  checkHospitalRole,
  checkRedCrossRole,
  checkAdminRole,
} from "../../ContractMethods/RolesMethods";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
`;
export default function CheckPage() {
  return (
    <Container>
      <RolesMethodContainer
        title={"병원 확인하기"}
        method={checkHospitalRole}
        placeholedr={"확인할 지갑주소"}
      />
      <RolesMethodContainer
        title={"적십자 확인하기"}
        method={checkRedCrossRole}
        placeholedr={"확인할 지갑주소"}
      />
      <RolesMethodContainer title={"관리자 확인하기"} method={checkAdminRole} />
    </Container>
  );
}
