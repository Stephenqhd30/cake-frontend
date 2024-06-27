import '@umijs/max';
import { Card } from 'antd';
import React, {useEffect, useState} from 'react';
import { ProCard } from '@ant-design/pro-components';
import { IdcardOutlined } from '@ant-design/icons';
import {getGoodsVoByIdUsingGet} from '@/services/stephen-backend/goodsController';
import {useParams} from '@@/exports';

const CakeInfoCard: React.FC = () => {
  const params = useParams<any>();
  const [goodsInfo, setGoodsInfo] = useState<API.GoodsVO>()

  const loadDate = async () => {
    const res = await getGoodsVoByIdUsingGet({
      // @ts-ignore
      id: params.id
    })
    setGoodsInfo(res?.data)
  }

  useEffect(() => {
    loadDate()
  }, []);

  return (
    <>
      <ProCard layout="center" direction="column">
        <ProCard layout={'center'}>
          <Card hoverable cover={<img alt={goodsInfo?.goodsName} style={{ height: 240 }} src={goodsInfo?.goodsCover} />}>
            <p>
              <IdcardOutlined
                style={{
                  marginRight: 8,
                }}
              />
              {goodsInfo?.goodsName}
            </p>
          </Card>
        </ProCard>
      </ProCard>
    </>
  );
};
export default CakeInfoCard;
