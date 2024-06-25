import React, { useState } from 'react';
import Search from 'antd/es/input/Search';
import {MyCakeCard} from '@/pages/Cake/MyCakeCard/components';


const searchStyle: React.CSSProperties = {
  margin: '0 auto',
  width: '1024px',
  padding: '16px',
};
const CakeIndexPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSearch = (value: string) => {
    setLoading(true);
    // 在这里处理搜索逻辑，例如发送搜索请求等
    setTimeout(() => {
      setLoading(false);
      console.log('搜索关键词:', value);
    }, 1000);
  };

  return (
    <>
      <div style={{...searchStyle}}>
        <Search
          onSearch={onSearch}
          placeholder="请输入搜索关键词"
          enterButton="搜索"
          size="large"
          loading={loading}
        />
      </div>
      <MyCakeCard />
    </>
  );
};

export default CakeIndexPage;
