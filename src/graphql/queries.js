/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequestPage = /* GraphQL */ `
  query GetRequestPage($id: ID!) {
    getRequestPage(id: $id) {
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
      _version
      _deleted
      _lastChangedAt
      owner
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
        type
        title
        description
        at
        state
        walletAddr
        user
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRequestPages = /* GraphQL */ `
  query SyncRequestPages(
    $filter: ModelRequestPageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequestPages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const sortByAt = /* GraphQL */ `
  query SortByAt(
    $type: String!
    $at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sortByAt(
      type: $type
      at: $at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
