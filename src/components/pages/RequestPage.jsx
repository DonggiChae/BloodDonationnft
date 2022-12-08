import React from "react";
import styled from "styled-components";
import { Amplify } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { RequestDonation } from "../../models";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
`;
const Board = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 70%;
  height: 80%;
  border-radius: 10px;
`;
const ContainerHeader = styled.div`
  padding: 35px;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 0.3mm solid rgba(202, 199, 199, 0.893);
`;
const Table = styled.div`
  height: 100%;
`;
const TableHeader = styled.div`
  border-bottom: 0.3mm solid rgba(202, 199, 199, 0.893);
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 1fr 5fr 2fr 2fr;
`;
const TableContent = styled.div``;

export default function RequestPage() {
  const createRequest = async () => {
    await DataStore.save(
      new RequestDonation({
        title: "Lorem ipsum dolor sit amet",
        contents: "Lorem ipsum dolor sit amet",
        status: "Lorem ipsum dolor sit amet",
        createdAt: "1970-01-01T12:30:23.999Z",
        walletAddress: "Lorem ipsum dolor sit amet",
      })
    );
  };

  //   const updateRequest = async () => {
  //     /* Models in DataStore are immutable. To update a record you must use the copyOf function
  //  to apply updates to the item’s fields rather than mutating the instance directly */
  //     await DataStore.save(
  //       RequestDonation.copyOf(CURRENT_ITEM, (item) => {
  //         // Update the values on {item} variable to update DataStore entry
  //       })
  //     );
  //   };

  const deleteRequest = async () => {
    const modelToDelete = await DataStore.query(RequestDonation, 123456789);
    DataStore.delete(modelToDelete);
  };

  const queryRequest = async () => {
    const models = await DataStore.query(RequestDonation);
    console.log(models);
  };

  queryRequest();
  return (
    <Container>
      <Board>
        <ContainerHeader>헌혈증 요청하기</ContainerHeader>
        <Table>
          <TableHeader>
            <TableContent>NO.</TableContent>
            <TableContent>제목</TableContent>
            <TableContent>상태</TableContent>
            <TableContent>날짜</TableContent>s
          </TableHeader>
          <TableContent></TableContent>
        </Table>
      </Board>
    </Container>
  );
}
