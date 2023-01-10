/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequestPage = /* GraphQL */ `
  mutation CreateRequestPage(
    $input: CreateRequestPageInput!
    $condition: ModelRequestPageConditionInput
  ) {
    createRequestPage(input: $input, condition: $condition) {
      id
      type
      title
      description
      at
      state
      walletAddr
      user
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateRequestPage = /* GraphQL */ `
  mutation UpdateRequestPage(
    $input: UpdateRequestPageInput!
    $condition: ModelRequestPageConditionInput
  ) {
    updateRequestPage(input: $input, condition: $condition) {
      id
      type
      title
      description
      at
      state
      walletAddr
      user
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteRequestPage = /* GraphQL */ `
  mutation DeleteRequestPage(
    $input: DeleteRequestPageInput!
    $condition: ModelRequestPageConditionInput
  ) {
    deleteRequestPage(input: $input, condition: $condition) {
      id
      type
      title
      description
      at
      state
      walletAddr
      user
      createdAt
      updatedAt
      owner
    }
  }
`;
