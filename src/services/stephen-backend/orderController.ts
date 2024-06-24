// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addOrder POST /api/order/add */
export async function addOrderUsingPost(
  body: API.OrderAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/order/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteOrder POST /api/order/delete */
export async function deleteOrderUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/order/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editOrder POST /api/order/edit */
export async function editOrderUsingPost(
  body: API.OrderEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/order/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getOrderVOById GET /api/order/get/vo */
export async function getOrderVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrderVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseOrderVO_>('/api/order/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listOrderByPage POST /api/order/list/page */
export async function listOrderByPageUsingPost(
  body: API.OrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOrder_>('/api/order/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listOrderVOByPage POST /api/order/list/page/vo */
export async function listOrderVoByPageUsingPost(
  body: API.OrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOrderVO_>('/api/order/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyOrderVOByPage POST /api/order/my/list/page/vo */
export async function listMyOrderVoByPageUsingPost(
  body: API.OrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageOrderVO_>('/api/order/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateOrder POST /api/order/update */
export async function updateOrderUsingPost(
  body: API.OrderUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/order/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
