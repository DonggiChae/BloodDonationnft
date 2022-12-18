import React, { useState } from "react";
import styled from "styled-components";
import { Outlet, useMatch, Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import Button from "../atoms/Button";
import Pagination from "../atoms/Pagination";

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
  width: 1050px;
  height: 600px;
  border-radius: 10px;
`;
const ContainerHeader = styled.div`
  padding: 28px;
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
const TableHeaderContent = styled.div``;

const TableContent = styled.div`
  height: 387px;
  border-bottom: 0.3mm solid rgba(202, 199, 199, 0.893);
`;

const ContentWrapper = styled.div`
  border-bottom: 0.3mm solid rgba(202, 199, 199, 0.893);
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 1fr 5fr 2fr 2fr;
`;
const Content = styled.div`
  font-size: 1.1rem;
`;

const TableBottom = styled.div`
  display: grid;
  padding: 10px 10px 10px 20px;
  grid-template-columns: 5fr 1fr;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function RequestTemplate({ contentInfo }) {
  const { user } = useAuthenticator((context) => [context.user]);
  const match = useMatch("/requestdonation");

  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  return (
    <Container>
      <Board>
        <ContainerHeader>헌혈증 요청하기</ContainerHeader>
        {!match ? (
          <Outlet />
        ) : (
          <Table>
            <TableHeader>
              <TableHeaderContent>NO.</TableHeaderContent>
              <TableHeaderContent>제목</TableHeaderContent>
              <TableHeaderContent>상태</TableHeaderContent>
              <TableHeaderContent>날짜</TableHeaderContent>
            </TableHeader>
            <TableContent>
              {contentInfo &&
                postsData(contentInfo).map((content, index) => (
                  <StyledLink
                    key={content.id}
                    to={`/requestdonation/${content.id}`}
                  >
                    <ContentWrapper>
                      <Content>{index + 1}</Content>
                      <Content>{content.title}</Content>
                      <Content>{content.state}</Content>
                      <Content>
                        {content.at.slice(0, 16).replace("T", " ")}
                      </Content>
                    </ContentWrapper>
                  </StyledLink>
                ))}
            </TableContent>
            <TableBottom>
              <TableHeaderContent>
                <Pagination
                  limit={limit}
                  page={page}
                  totalPosts={contentInfo.length}
                  setPage={setPage}
                />
              </TableHeaderContent>
              {user ? (
                <StyledLink to="/requestdonation/createRequest">
                  <Button title={"요청하기"} />
                </StyledLink>
              ) : (
                <></>
              )}
            </TableBottom>
          </Table>
        )}
      </Board>
    </Container>
  );
}
