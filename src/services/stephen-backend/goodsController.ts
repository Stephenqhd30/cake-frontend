// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addGoods POST /api/goods/add */
export async function addGoodsUsingPost(
  body: API.GoodsAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/goods/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteGoods POST /api/goods/delete */
export async function deleteGoodsUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/goods/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editGoods POST /api/goods/edit */
export async function editGoodsUsingPost(
  body: API.GoodsEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/goods/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getGoodsVOById GET /api/goods/get/vo */
export async function getGoodsVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGoodsVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseGoodsVO_>('/api/goods/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listGoodsByPage POST /api/goods/list/page */
export async function listGoodsByPageUsingPost(
  body: API.GoodsQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGoods_>('/api/goods/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listGoodsVOByPage POST /api/goods/list/page/vo */
export async function listGoodsVoByPageUsingPost(
  body: API.GoodsQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGoodsVO_>('/api/goods/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyGoodsVOByPage POST /api/goods/my/list/page/vo */
export async function listMyGoodsVoByPageUsingPost(
  body: API.GoodsQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageGoodsVO_>('/api/goods/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateGoods POST /api/goods/update */
export async function updateGoodsUsingPost(
  body: API.GoodsUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/goods/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
