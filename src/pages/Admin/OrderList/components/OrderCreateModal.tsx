import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import { addOrderUsingPost } from '@/services/stephen-backend/orderController';

interface OrderCreateProps {
  onCancel: () => void;
  onSubmit: (values: API.OrderAddRequest) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.Order>[];
}

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: API.OrderAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addOrderUsingPost({
      ...fields,
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
const OrderCreateModal: React.FC<OrderCreateProps> = (props) => {
  const { visible, onSubmit, onCancel, columns } = props;
  return (
    <Modal
      destroyOnClose
      title={'创建'}
      open={visible}
      footer={null}
      onCancel={() => {
        onCancel?.();
      }}
    >
      <ProTable
        columns={columns}
        onSubmit={async (values: API.OrderAddRequest) => {
          const success = await handleAdd(values);
          if (success) {
            onSubmit?.(values);
          }
        }}
        type={'form'}
      />
    </Modal>
  );
};
export default OrderCreateModal;
