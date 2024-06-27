import '@umijs/max';
import React, {useEffect, useState} from 'react';
import {ProCard, ProDescriptions} from '@ant-design/pro-components';
import {getGoodsVoByIdUsingGet} from '@/services/stephen-backend/goodsController';
import {useParams} from '@@/exports';
import {message} from 'antd';


const CakeDetailsCard: React.FC = () => {
  const params = useParams<any>()
  const [goodsInfo, setGoodsInfo] = useState<API.GoodsVO>()
  const loadDate = async () => {
    try {
      const res = await getGoodsVoByIdUsingGet({
        // @ts-ignore
        id: params.id
      });
      setGoodsInfo(res?.data);
    } catch (error: any) {
      message.error(`获取数据失败${error.message}`);
    }
  };
  useEffect(() => {
    loadDate()
  }, []);

  return (
    <>
      <ProCard>
        <ProDescriptions<API.User>
          title={
            <>
              <span>{goodsInfo?.goodsName}</span>
            </>
          }
          dataSource={goodsInfo}
          emptyText={'数据暂时不存在哦'}
          columns={[
            {
              title: '商品id',
              dataIndex: 'id',
              valueType: 'text',
              hideInForm: true,
            },
            {
              title: '商品名称',
              dataIndex: 'goodsName',
              valueType: 'text',
            },
            {
              title: '商品描述',
              dataIndex: 'content',
              valueType: 'text',
            },
            {
              title: '商品价格',
              dataIndex: 'price',
              valueType: 'text',
            },
            {
              title: '商品库存',
              dataIndex: 'stock',
              valueType: 'text',
            },
            {
              title: '商品类型',
              dataIndex: 'typeName',
              valueType: 'text',
              valueEnum: {
                "冰淇淋系列": {
                  text: '冰淇淋系列',
                },
                "零食系列": {
                  text: '零食系列',
                },
                "儿童系列": {
                  text: '儿童系列',
                },
                "法式系列": {
                  text: '法式系列',
                },
                "经典系列": {
                  text: '经典系列',
                },
                "节日系列": {
                  text: '节日系列',
                },
                "买不起系列": {
                  text: '买不起系列',
                },
              },
            },
            {
              title: '创建人姓名',
              dataIndex: 'userVO',
              valueType: 'text',
              key: 'userVO',
              render: (_, record: API.GoodsVO) => {
                return <div>{record?.userVO?.userName}</div>;
              },
            },
            {
              title: '商品封面',
              dataIndex: 'goodsCover',
              valueType: 'image',
              fieldProps: {
                width: 48,
              },
            },
            {
              title: '商品图1',
              dataIndex: 'goodsImage1',
              valueType: 'image',
              fieldProps: {
                width: 48,
              },
            },
            {
              title: '商品图2',
              dataIndex: 'goodsImage2',
              valueType: 'image',
              fieldProps: {
                width: 48,
              },
            },
            {
              title: '创建时间',
              dataIndex: 'createTime',
              valueType: 'dateTime',
            },
            {
              title: '更新时间',
              dataIndex: 'updateTime',
              valueType: 'dateTime',
            },
          ]}
        />
      </ProCard>
    </>
  );
};
export default CakeDetailsCard;
