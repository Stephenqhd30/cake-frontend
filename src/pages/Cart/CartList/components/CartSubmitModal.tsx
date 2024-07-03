import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import { addOrderUsingPost } from '@/services/stephen-backend/orderController';

interface CartSubmitCreateProps {
  onCancel: () => void;
  onSubmit: (values: API.OrderAddRequest) => Promise<void>;
  visible: boolean;
  goodsId: number | undefined;
}

/**
 * 表格列数据
 */
const columns: ProColumns<API.Order>[] = [
  {
    title: '订单id',
    dataIndex: 'id',
    valueType: 'text',
    hideInForm: true,
  },
  {
    title: '商品数量',
    dataIndex: 'amount',
    valueType: 'text',
  },
  {
    title: '收件人地址',
    dataIndex: 'address',
    valueType: 'text',
  },
  {
    title: '收件人姓名',
    dataIndex: 'userName',
    valueType: 'text',
  },
  {
    title: '收件人电话',
    dataIndex: 'userPhone',
    valueType: 'text',
  },
  {
    title: '支付状态',
    dataIndex: 'status',
    valueType: 'text',
    valueEnum: {
      0: {
        text: '正常',
      },
      1: {
        text: '失败',
      },
    },
  },

  {
    title: '支付方式',
    dataIndex: 'payType',
    valueType: 'text',
    valueEnum: {
      0: {
        text: '微信支付',
      },
      1: {
        text: '支付宝支付',
      },
    },
  },
  {
    title: '订单总金额',
    dataIndex: 'total',
    valueType: 'text',
  },
  {
    title: '订单配送时间',
    sorter: true,
    dataIndex: 'dateTime',
    valueType: 'dateTime',
  },
];

/**
 * 添加节点
 *
 * @param fields
 * @param goodsId
 */
const handleAdd = async (fields: API.OrderAddRequest, goodsId: number | undefined) => {
  const hide = message.loading('正在添加');
  try {
    await addOrderUsingPost({
      ...fields,
      goodsId: goodsId
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error: any) {
    hide();
    message.error(`添加失败${error.message}, 请重试!`);
    return false;
  }
};

/**
 * 常见弹窗
 * @param props
 * @constructor
 */
const CartCreateModal: React.FC<CartSubmitCreateProps> = (props) => {
  const { visible, onSubmit, onCancel, goodsId } = props;
  return (
    <Modal
      destroyOnClose
      title={'加入购物车'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <ProTable
        columns={columns}
        onSubmit={async (values: API.CartAddRequest) => {
          const success = await handleAdd(values, goodsId);
          if (success) {
            onSubmit?.(values);
          }
        }}
        type={'form'}
      />
    </Modal>
  );
};
export default CartCreateModal;
