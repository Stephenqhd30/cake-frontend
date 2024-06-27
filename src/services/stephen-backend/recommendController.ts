// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addRecommend POST /api/recommend/add */
export async function addRecommendUsingPost(
  body: API.RecommendAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/recommend/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteRecommend POST /api/recommend/delete */
export async function deleteRecommendUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/recommend/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editRecommend POST /api/recommend/edit */
export async function editRecommendUsingPost(
  body: API.RecommendEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/recommend/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRecommendVOById GET /api/recommend/get/vo */
export async function getRecommendVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRecommendVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseRecommendVO_>('/api/recommend/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listRecommendByPage POST /api/recommend/list/page */
export async function listRecommendByPageUsingPost(
  body: API.RecommendQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageRecommend_>('/api/recommend/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listRecommendVOByPage POST /api/recommend/list/page/vo */
export async function listRecommendVoByPageUsingPost(
  body: API.RecommendQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageRecommendVO_>('/api/recommend/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyRecommendVOByPage POST /api/recommend/my/list/page/vo */
export async function listMyRecommendVoByPageUsingPost(
  body: API.RecommendQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageRecommendVO_>('/api/recommend/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateRecommend POST /api/recommend/update */
export async function updateRecommendUsingPost(
  body: API.RecommendUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/recommend/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
