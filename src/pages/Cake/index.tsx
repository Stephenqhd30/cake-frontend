import React, { useState } from 'react';
import Search from 'antd/es/input/Search';
import MyCakeCard from '@/pages/Cake/MyCakeCard';
import { doSearchAllUsingPost } from '@/services/stephen-backend/searchController';
import { message } from 'antd';

const searchStyle: React.CSSProperties = {
  margin: '0 auto',
  width: '1024px',
  padding: '16px',
};

// 初始化搜索参数
const initSearchParams: API.SearchRequest = {
  searchText: '',
  pageSize: 10,
  current: 1,
  type: '',
};

const CakeIndexPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dateList, setDateList] = useState<API.GoodsVO[]>([]);
  const [searchParams, setSearchParams] = useState<API.SearchRequest>(initSearchParams);

  /**
   * 搜索函数
   * @param value
   */
  const onSearch = async (value: string) => {
    setLoading(true);
    try {
      // 更新搜索参数
      setSearchParams({
        ...searchParams,
        searchText: value,
      });

      // 发送搜索请求
      const res = await doSearchAllUsingPost({
        ...searchParams,
        searchText: value, // 更新搜索文本
      });
      if (res.code === 0 && res.data) {
        setDateList(res.data.dateList?.records || []);
        message.success('数据加载成功');
      }
    } catch (error: any) {
      message.error(`搜索失败，请重试！ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ ...searchStyle }}>
        <Search
          onSearch={onSearch}
          placeholder="请输入搜索关键词"
          enterButton="搜索"
          size="large"
          loading={loading}
        />
      </div>
      <MyCakeCard initDateList={dateList} />
    </>
  );
};

export default CakeIndexPage;
