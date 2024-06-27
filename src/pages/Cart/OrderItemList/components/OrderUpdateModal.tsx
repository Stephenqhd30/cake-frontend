import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import { updateOrderItemUsingPost } from '@/services/stephen-backend/orderItemController';

interface OrderItemUpdateProps {
  oldData?: API.OrderItemVO;
  onCancel: () => void;
  onSubmit: (values: API.OrderItemUpdateRequest) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.OrderItemVO>[];
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.OrderItemUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    await updateOrderItemUsingPost(fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    message.error(`更新失败${error.message}, 请重试!`);
    return false;
  }
};
const OrderItemUpdateModal: React.FC<OrderItemUpdateProps> = (props) => {
  const { oldData, visible, onSubmit, onCancel, columns } = props;
  if (!oldData) {
    return <></>;
  }

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
        type={'form'}
        form={{
          initialValues: oldData,
        }}
        columns={columns}
        onSubmit={async (values: API.OrderItemUpdateRequest) => {
          const success = await handleUpdate({
            ...values,
            id: oldData?.id,
          });
          if (success) {
            onSubmit?.(values);
          }
        }}
      />
    </Modal>
  );
};
export default OrderItemUpdateModal;
