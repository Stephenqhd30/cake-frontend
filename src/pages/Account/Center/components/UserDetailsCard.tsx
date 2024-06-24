import '@umijs/max';
import React from 'react';
import { useModel } from '@@/exports';
import {ProCard, ProDescriptions} from '@ant-design/pro-components';

const UserDetailsCard: React.FC<API.User> = () => {
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState?.currentUser;

  return (
    <>
      <ProCard>
        <ProDescriptions<API.User>
          title={
            <>
              <span>{currentUser?.userName}</span>
            </>
          }
          dataSource={currentUser}
          emptyText={'数据暂时不存在哦'}
          columns={[
            {
              title: '用户id',
              key: 'id',
              dataIndex: 'id',
            },
            {
              title: '用户角色',
              key: 'userRole',
              dataIndex: 'userRole',
              valueType: 'text',
              valueEnum: {
                admin: {
                  text: '管理员',
                },
                user: {
                  text: '普通用户',
                },
              },
            },
            {
              title: '用户名',
              key: 'userName',
              dataIndex: 'userName',
              valueType: 'text',
            },
            {
              title: '用户简介',
              key: 'userProfile',
              dataIndex: 'userProfile',
              valueType: 'text',
            },
            {
              title: '邮箱',
              key: 'userEmail',
              dataIndex: 'userEmail',
              valueType: 'text',
            },
            {
              title: '电话',
              key: 'userPhone',
              dataIndex: 'userPhone',
              valueType: 'text',
            },
            {
              title: '创建时间',
              key: 'createTime',
              dataIndex: 'createTime',
              valueType: 'date',
              fieldProps: {
                format: 'YYYY.MM.DD',
              },
            },
            {
              title: '更新时间',
              key: 'updateTime',
              dataIndex: 'updateTime',
              valueType: 'date',
              fieldProps: {
                format: 'YYYY.MM.DD',
              },
            },
          ]}
        />
      </ProCard>
    </>
  );
};
export default UserDetailsCard;
