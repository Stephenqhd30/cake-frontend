// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addCart POST /api/cart/add */
export async function addCartUsingPost(body: API.CartAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteCart POST /api/cart/delete */
export async function deleteCartUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/cart/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editCart POST /api/cart/edit */
export async function editCartUsingPost(
  body: API.CartEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/cart/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCartVOById GET /api/cart/get/vo */
export async function getCartVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCartVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCartVO_>('/api/cart/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listCartByPage POST /api/cart/list/page */
export async function listCartByPageUsingPost(
  body: API.CartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCart_>('/api/cart/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listCartVOByPage POST /api/cart/list/page/vo */
export async function listCartVoByPageUsingPost(
  body: API.CartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCartVO_>('/api/cart/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyCartVOByPage POST /api/cart/my/list/page/vo */
export async function listMyCartVoByPageUsingPost(
  body: API.CartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCartVO_>('/api/cart/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCart POST /api/cart/update */
export async function updateCartUsingPost(
  body: API.CartUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/cart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
