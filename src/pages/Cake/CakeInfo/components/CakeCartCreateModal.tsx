import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal } from 'antd';
import React from 'react';
import { addCartUsingPost } from '@/services/stephen-backend/cartController';
import {useParams} from '@@/exports';

interface CartCreateProps {
  onCancel: () => void;
  onSubmit: (values: API.CartAddRequest) => Promise<void>;
  visible: boolean;
}

const columns: ProColumns<API.Cart>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    valueType: 'text',
    hideInForm: true,
  },
  {
    title: '商品id',
    dataIndex: 'goodsId',
    valueType: 'text',
    hideInForm: true,
  },
  {
    title: '购买数量',
    dataIndex: 'quantity',
    valueType: 'text',
  },
];
/**
 * 常见弹窗
 * @param props
 * @constructor
 */
const CakeCartCreateModal: React.FC<CartCreateProps> = (props) => {
  const params = useParams()
  const { visible, onSubmit, onCancel } = props;

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
        // @ts-ignore
        goodsId: params.id,
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
export default CakeCartCreateModal;
