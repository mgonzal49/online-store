/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrderLine = /* GraphQL */ `
  mutation CreateOrderLine(
    $input: CreateOrderLineInput!
    $condition: ModelOrderLineConditionInput
  ) {
    createOrderLine(input: $input, condition: $condition) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrderLine = /* GraphQL */ `
  mutation UpdateOrderLine(
    $input: UpdateOrderLineInput!
    $condition: ModelOrderLineConditionInput
  ) {
    updateOrderLine(input: $input, condition: $condition) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrderLine = /* GraphQL */ `
  mutation DeleteOrderLine(
    $input: DeleteOrderLineInput!
    $condition: ModelOrderLineConditionInput
  ) {
    deleteOrderLine(input: $input, condition: $condition) {
      id
      orderID
      itemID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
