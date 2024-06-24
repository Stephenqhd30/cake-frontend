import React from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { ACCOUNT_TITLE } from '@/constants';
import UserInfoCard from '@/pages/Account/Center/components/UserCard';
import UserDetailsCard from '@/pages/Account/Center/components/UserDetailsCard';

const UserCenter: React.FC = () => {
  return (
    <PageContainer title={ACCOUNT_TITLE}>
      <ProCard
        layout={"center"}
        style={{ marginBlockStart: 8 }}
        gutter={8}
        title="个人信息页展示"
        extra={new Date().toLocaleDateString()}
        bordered
        headerBordered
      >
        <ProCard colSpan="30%">
          <UserInfoCard />
        </ProCard>
        <ProCard title="个人信息详细页" headerBordered>
          <UserDetailsCard />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default UserCenter;
