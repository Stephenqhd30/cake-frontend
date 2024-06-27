import { PlusOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Popconfirm, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import GoodsUpdateModal from './components/GoodsUpdateModal';
import {
  deleteGoodsUsingPost,
  listGoodsVoByPageUsingPost,
} from '@/services/stephen-backend/goodsController';
import GoodsCreateModal from '@/pages/Admin/GoodsList/components/GoodsCreateModal';

/**
 * 删除节点
 *
 * @param row
 */
const handleDelete = async (row: API.DeleteRequest) => {
  const hide = message.loading('正在删除');
  if (!row) return true;
  try {
    await deleteGoodsUsingPost({
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
const GoodsList: React.FC = () => {
  // 新建窗口的Modal框
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 更新窗口的Modal框
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户的所点击的数据
  const [currentRow, setCurrentRow] = useState<API.Goods>();

  /**
   * 表格列数据
   */
  const columns: ProColumns<API.GoodsVO>[] = [
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
      hideInSearch: true,
    },
    {
      title: '商品图1',
      dataIndex: 'goodsImage1',
      valueType: 'image',
      fieldProps: {
        width: 48,
      },
      hideInSearch: true,
    },
    {
      title: '商品图2',
      dataIndex: 'goodsImage2',
      valueType: 'image',
      fieldProps: {
        width: 48,
      },
      hideInSearch: true,
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
      <ProTable<API.Goods, API.PageParams>
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
          const sortOrder = sort?.[sortField] ?? undefined;
          const { data, code } = await listGoodsVoByPageUsingPost({
            ...params,
            ...filter,
            sortField,
            sortOrder,
          } as API.OrderQueryRequest);

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
        <GoodsCreateModal
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
        <GoodsUpdateModal
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
    </PageContainer>
  );
};
export default GoodsList;
