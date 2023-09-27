/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrderLine = /* GraphQL */ `
  subscription OnCreateOrderLine(
    $filter: ModelSubscriptionOrderLineFilterInput
  ) {
    onCreateOrderLine(filter: $filter) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrderLine = /* GraphQL */ `
  subscription OnUpdateOrderLine(
    $filter: ModelSubscriptionOrderLineFilterInput
  ) {
    onUpdateOrderLine(filter: $filter) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrderLine = /* GraphQL */ `
  subscription OnDeleteOrderLine(
    $filter: ModelSubscriptionOrderLineFilterInput
  ) {
    onDeleteOrderLine(filter: $filter) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
