import styled from "styled-components";
import RolesMethodContainer from "../components/organisms/RolesMethodContainer";
import {
  addAdmin,
  renounceAdmin,
  grantHospitalRole,
  grantRedCrossRole,
  checkRole,
} from "../components/ContractMethods/RolesMethods";

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
      <RolesMethodContainer title={"addAdmin"} method={addAdmin} />
      <RolesMethodContainer title={"renounceAdmin"} method={renounceAdmin} />
      <RolesMethodContainer
        title={"grantHospitalRole"}
        method={grantHospitalRole}
      />
      <RolesMethodContainer
        title={"grantRedCrossRole"}
        method={grantRedCrossRole}
      />
    </Container>
  );
}
