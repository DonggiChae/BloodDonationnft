/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequestPage = /* GraphQL */ `
  query GetRequestPage($id: ID!) {
    getRequestPage(id: $id) {
      id
      title
      description
      at
      state
      user
      walletAddr
      createdAt
      updatedAt
    }
  }
`;
export const listRequestPages = /* GraphQL */ `
  query ListRequestPages(
    $filter: ModelRequestPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        at
        state
        user
      }
      nextToken
    }
  }
`;

// export const listRequestPages = /* GraphQL */ `
//   query ListRequestPages(
//     $filter: ModelRequestPageFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listRequestPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         title
//         description
//         at
//         state
//         walletAddr
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;
