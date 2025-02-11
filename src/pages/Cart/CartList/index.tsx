import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Popconfirm, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import {
  deleteCartUsingPost,
  listCartVoByPageUsingPost,
} from '@/services/stephen-backend/cartController';
import {
  CartCreateModal,
  CartSubmitModal,
  CartUpdateModal,
} from '@/pages/Cart/CartList/components';


/**
 * 删除节点
 *
 * @param row
 */
const handleDelete = async (row: API.DeleteRequest) => {
  const hide = message.loading('正在删除');
  if (!row) return true;
  try {
    await deleteCartUsingPost({
      id: row.id,
    });
    hide();
    message.success('删除成功');
    return true;
  } catch (error: any) {
    hide();
    message.error(`删除失败${error.message}, 请重试!`);
    return false;
  }
};

/**
 * 用户管理列表
 * @constructor
 */
const CartList: React.FC = () => {
  // 新建窗口的Modal框
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 更新窗口的Modal框
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  // 创建订单提交的Modal框
  const [submitModalVisible, setSubmitModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  // 当前用户的所点击的数据
  const [currentRow, setCurrentRow] = useState<API.CartVO>();

  /**
   * 表格列数据
   */
  const columns: ProColumns<API.CartVO>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
    },
    {
      title: '购买数量',
      dataIndex: 'quantity',
      valueType: 'text',
    },
    {
      title: '商品信息',
      dataIndex: 'goodsVO',
      valueType: 'text',
      render: (_, record: API.CartVO) => {
        return <div>{record.goodsVO?.goodsName}</div>;
      },
      hideInForm: true,
    },
    {
      title: '用户姓名',
      dataIndex: 'userVO',
      valueType: 'text',
      render: (_, record: API.CartVO) => {
        return <div>{record.userVO?.userName}</div>;
      },
      hideInForm: true,
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '更新时间',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size={'middle'}>
          <Typography.Link
            key="submit"
            onClick={() => {
              setSubmitModalVisible(true);
              setCurrentRow(record);
              actionRef.current?.reload();
            }}
          >
            提交订单
          </Typography.Link>
          <Typography.Link
            key="update"
            onClick={() => {
              setUpdateModalVisible(true);
              setCurrentRow(record);
              actionRef.current?.reload();
            }}
          >
            修改
          </Typography.Link>
          {/*删除表单用户的PopConfirm框*/}
          <Popconfirm
            title="确定删除？"
            description="删除后将无法恢复?"
            okText="确定"
            cancelText="取消"
            onConfirm={async () => {
              await handleDelete(record);
              actionRef.current?.reload();
            }}
          >
            <Typography.Link
              key={'delete'}
              type={'danger'}
              onClick={() => {
                setCurrentRow(record);
              }}
            >
              删除
            </Typography.Link>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.CartVO, API.PageParams>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey={'key'}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (params, sort, filter) => {
          const sortField = Object.keys(sort)?.[0];
          const sortCart = sort?.[sortField] ?? undefined;
          const { data, code } = await listCartVoByPageUsingPost({
            ...params,
            ...filter,
            sortField,
            sortCart,
          } as API.CartQueryRequest);

          return {
            success: code === 0,
            data: data?.records || [],
            total: data?.total || 0,
          };
        }}
        columns={columns}
      />

      {/*新建表单的Modal框*/}
      {createModalVisible && (
        <CartCreateModal
          onCancel={() => {
            setCreateModalVisible(false);
          }}
          onSubmit={async () => {
            setCreateModalVisible(false);
            actionRef.current?.reload();
          }}
          visible={createModalVisible}
          columns={columns}
        />
      )}
      {/*更新表单的Modal框*/}
      {updateModalVisible && (
        <CartUpdateModal
          onCancel={() => {
            setUpdateModalVisible(false);
          }}
          onSubmit={async () => {
            setUpdateModalVisible(false);
            setCurrentRow(undefined);
            actionRef.current?.reload();
          }}
          visible={updateModalVisible}
          columns={columns}
          oldData={currentRow}
        />
      )}
      {/*提交订单表单的Modal框*/}
      {submitModalVisible && (
        <CartSubmitModal
          onCancel={() => {
            setSubmitModalVisible(false);
          }}
          onSubmit={async () => {
            setSubmitModalVisible(false);
            actionRef.current?.reload();
          }}
          visible={submitModalVisible}
          goodsId={currentRow?.goodsVO?.id}
        />
      )}
    </PageContainer>
  );
};
export default CartList;
