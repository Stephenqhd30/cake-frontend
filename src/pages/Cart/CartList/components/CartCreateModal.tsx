import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import {addCartUsingPost} from '@/services/stephen-backend/cartController';

interface CartCreateProps {
  onCancel: () => void;
  onSubmit: (values: API.CartAddRequest) => Promise<void>;
  visible: boolean;
  columns: ProColumns<API.CartVO>[];
}

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: API.CartAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addCartUsingPost({
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
const CartCreateModal: React.FC<CartCreateProps> = (props) => {
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
        onSubmit={async (values: API.CartAddRequest) => {
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
export default CartCreateModal;
