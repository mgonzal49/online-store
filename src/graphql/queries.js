/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrderLine = /* GraphQL */ `
  query GetOrderLine($id: ID!) {
    getOrderLine(id: $id) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderLines = /* GraphQL */ `
  query ListOrderLines(
    $filter: ModelOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderID
        itemID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderLinesByOrderID = /* GraphQL */ `
  query OrderLinesByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderLinesByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderID
        itemID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderLinesByItemID = /* GraphQL */ `
  query OrderLinesByItemID(
    $itemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderLinesByItemID(
      itemID: $itemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderID
        itemID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      grandTotal
      orderDate
      OrderLines {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        grandTotal
        orderDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      price
      OrderLines {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
