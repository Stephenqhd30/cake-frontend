import { ProCard } from '@ant-design/pro-components';
import { useState } from 'react';
import {
  AllCake,
  ChildrenCake,
  ClassicCake,
  FestivalCake,
  IceCreamCake,
  MethodCake,
  NotAffordCake,
  SnackCake,
} from '@/pages/Cake/MyCakeCard/components/index';

const MyCakeCard = () => {
  const [activeKey, setActiveKey] = useState('all');

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
              children: <AllCake />,
            },
            {
              label: `冰淇淋系列`,
              key: 'iceCream',
              children: <IceCreamCake />,
            },
            {
              label: `零食系列`,
              key: 'snack',
              children: <SnackCake />,
            },
            {
              label: `儿童系列`,
              key: 'children',
              children: <ChildrenCake />,
            },
            {
              label: `法式系列`,
              key: 'method',
              children: <MethodCake />,
            },
            {
              label: `经典系列`,
              key: 'classic',
              children: <ClassicCake />,
            },
            {
              label: `节日系列`,
              key: 'festival',
              children: <FestivalCake />,
            },
            {
              label: `买不起系列`,
              key: 'notAfford',
              children: <NotAffordCake />,
            },
          ],
          onChange: (key) => {
            setActiveKey(key);
          },
        }}
      />
    </div>
  );
};

export default MyCakeCard;
