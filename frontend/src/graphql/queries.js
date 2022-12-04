/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequestDonation = /* GraphQL */ `
  query GetRequestDonation($id: ID!) {
    getRequestDonation(id: $id) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
export const listRequestDonations = /* GraphQL */ `
  query ListRequestDonations(
    $filter: ModelRequestDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        author
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
