import { ProCard } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import CakeDetails from '@/pages/Cake/MyCakeCard/component/CakeDetails';
import { doSearchAllUsingPost } from '@/services/stephen-backend/searchController';
import {message, Pagination} from 'antd';

interface MyCakeCardProps {
  initDateList: API.GoodsVO[];
}

const initSearchParams: API.SearchRequest = {
  searchText: '',
  pageSize: 12,
  current: 1,
  type: '',
};

const MyCakeCard: React.FC<MyCakeCardProps> = (props) => {
  const { initDateList } = props;
  const [dateList, setDateList] = useState<API.GoodsVO[]>(initDateList);
  const [activeKey, setActiveKey] = useState('all');
  const [searchParams, setSearchParams] = useState<API.SearchRequest>(initSearchParams);
  const [total, setTotal] = useState<number>(0);

  const loadDate = async () => {
    try {
      const res = await doSearchAllUsingPost({...searchParams});
      if (res.code === 0 && res.data) {
        setDateList(res?.data.dateList?.records || []);
        setTotal(res?.data.dateList?.total || 0);
      }
    } catch (error : any) {
      message.error(`数据加载失败${error.message}`)
    }
  };

  useEffect( () => {
    loadDate()
  }, [searchParams]);

  const handleTabChange = (key: string) => {
    setActiveKey(key);
    setSearchParams({ ...searchParams, type: key === 'all' ? '' : key, current: 1 });
  };

  const handlePageChange = (pageNum: number, pageSize?: number) => {
    setSearchParams({
      ...searchParams,
      current: pageNum,
      pageSize: pageSize || searchParams.pageSize,
    });
  };

  return (
    <div>
      <ProCard
        tabs={{
          tabPosition: 'top',
          activeKey: activeKey,
          items: [
            {
              label: `全部`,
              key: 'all',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `冰淇淋系列`,
              key: '冰淇淋系列',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `零食系列`,
              key: '零食系列',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `儿童系列`,
              key: '儿童系列',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `法式系列`,
              key: '法式系列',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `经典系列`,
              key: '经典系列',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `节日系列`,
              key: '节日系列',
              children: <CakeDetails dateList={dateList} />,
            },
            {
              label: `买不起系列`,
              key: '买不起系列',
              children: <CakeDetails dateList={dateList}/>,
            },
          ],
          onChange: handleTabChange,
        }}
      />
      <Pagination
        current={searchParams.current}
        pageSize={searchParams.pageSize}
        total={total}
        onChange={handlePageChange}
        style={{ marginTop: 16, textAlign: 'center' }}
      />
    </div>
  );
};

export default MyCakeCard;
