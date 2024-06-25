// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addType POST /api/type/add */
export async function addTypeUsingPost(body: API.TypeAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/type/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteType POST /api/type/delete */
export async function deleteTypeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/type/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editType POST /api/type/edit */
export async function editTypeUsingPost(
  body: API.TypeEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/type/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTypeVOById GET /api/type/get/vo */
export async function getTypeVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTypeVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTypeVO_>('/api/type/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listTypeByPage POST /api/type/list/page */
export async function listTypeByPageUsingPost(
  body: API.TypeQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageType_>('/api/type/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listTypeVOByPage POST /api/type/list/page/vo */
export async function listTypeVoByPageUsingPost(
  body: API.TypeQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTypeVO_>('/api/type/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyTypeVOByPage POST /api/type/my/list/page/vo */
export async function listMyTypeVoByPageUsingPost(
  body: API.TypeQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTypeVO_>('/api/type/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateType POST /api/type/update */
export async function updateTypeUsingPost(
  body: API.TypeUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/type/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
