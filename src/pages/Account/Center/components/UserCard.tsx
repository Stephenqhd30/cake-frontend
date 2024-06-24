import '@umijs/max';
import { Card } from 'antd';
import React from 'react';
import { useModel } from '@@/exports';
import { ProCard } from '@ant-design/pro-components';
import { IdcardOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';

const UserInfoCard: React.FC<API.User> = () => {
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser;

  return (
    <>
      <ProCard layout="center" direction="column">
        <ProCard layout={'center'}>
          <Card hoverable cover={<img alt={currentUser?.userName} src={currentUser?.userAvatar} />}>
            <p>
              <IdcardOutlined
                style={{
                  marginRight: 8,
                }}
              />
              {currentUser?.userName}
            </p>
            <p>
              <SmileOutlined
                style={{
                  marginRight: 8,
                }}
              />
              {currentUser?.userProfile}
            </p>
            <p>
              <UserOutlined
                style={{
                  marginRight: 8,
                }}
              />
              {currentUser?.userRole === 'admin' ? '管理员' : '普通用户'}
            </p>
          </Card>
        </ProCard>
      </ProCard>
    </>
  );
};
export default UserInfoCard;
