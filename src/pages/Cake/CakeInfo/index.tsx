import React from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import CakeInfoCard from '@/pages/Cake/CakeInfo/components/CakeInfoCard';
import CakeDetailsCard from '@/pages/Cake/CakeInfo/components/CakeDetailsCard';

const CakeInfo: React.FC = () => {
  return (
    <PageContainer title="欢迎光临商品详细页">
      <ProCard
        layout={'center'}
        style={{ marginBlockStart: 8 }}
        gutter={8}
        title="商品信息页展示"
        extra={new Date().toLocaleDateString()}
        bordered
        headerBordered
      >
        <ProCard colSpan="30%">
          <CakeInfoCard />
        </ProCard>
        <ProCard title="商品详细页面" headerBordered>
          <CakeDetailsCard />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default CakeInfo;
