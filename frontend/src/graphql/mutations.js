/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequestDonation = /* GraphQL */ `
  mutation CreateRequestDonation(
    $input: CreateRequestDonationInput!
    $condition: ModelRequestDonationConditionInput
  ) {
    createRequestDonation(input: $input, condition: $condition) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
export const updateRequestDonation = /* GraphQL */ `
  mutation UpdateRequestDonation(
    $input: UpdateRequestDonationInput!
    $condition: ModelRequestDonationConditionInput
  ) {
    updateRequestDonation(input: $input, condition: $condition) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequestDonation = /* GraphQL */ `
  mutation DeleteRequestDonation(
    $input: DeleteRequestDonationInput!
    $condition: ModelRequestDonationConditionInput
  ) {
    deleteRequestDonation(input: $input, condition: $condition) {
      id
      text
      author
      createdAt
      updatedAt
    }
  }
`;
