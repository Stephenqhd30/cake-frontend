// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addOrderItem POST /api/orderItem/add */
export async function addOrderItemUsingPost(
  body: API.OrderItemAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/orderItem/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteOrderItem POST /api/orderItem/delete */
export async function deleteOrderItemUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/orderItem/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editOrderItem POST /api/orderItem/edit */
export async function editOrderItemUsingPost(
  body: API.OrderItemEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/orderItem/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getOrderItemVOById GET /api/orderItem/get/vo */
export async function getOrderItemVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderItemVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseOrderItemVO_>('/api/orderItem/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listOrderItemByPage POST /api/orderItem/list/page */
export async function listOrderItemByPageUsingPost(
  body: API.OrderItemQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOrderItem_>('/api/orderItem/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listOrderItemVOByPage POST /api/orderItem/list/page/vo */
export async function listOrderItemVoByPageUsingPost(
  body: API.OrderItemQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOrderItemVO_>('/api/orderItem/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyOrderItemVOByPage POST /api/orderItem/my/list/page/vo */
export async function listMyOrderItemVoByPageUsingPost(
  body: API.OrderItemQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOrderItemVO_>('/api/orderItem/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateOrderItem POST /api/orderItem/update */
export async function updateOrderItemUsingPost(
  body: API.OrderItemUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/orderItem/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
