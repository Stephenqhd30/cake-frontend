import { PageContainer, ProCard } from '@ant-design/pro-components';
import React, { useState } from 'react';

import { ACCOUNT_TITLE } from '@/constants';
import BaseView from '@/pages/Account/Settings/components/base';
import Binding from '@/pages/Account/Settings/components/binding';
import SecurityView from '@/pages/Account/Settings/components/security';

const Settings: React.FC = () => {
  const [tab, setTab] = useState('base');
  return (
    <PageContainer title={ACCOUNT_TITLE}>
      <div>
        <ProCard
          tabs={{
            tabPosition: 'left',
            activeKey: tab,
            items: [
              {
                label: `基本设置`,
                key: 'base',
                children: <BaseView />,
              },
              {
                label: `账号绑定`,
                key: 'binding',
                children: <Binding />,
              },
              {
                label: `安全设置`,
                key: 'security',
                children: <SecurityView/>,
             },
            ],
            onChange: (key) => {
              setTab(key);
           },
          }}
        />
      </div>
    </PageContainer>
  );
};
export default Settings;
