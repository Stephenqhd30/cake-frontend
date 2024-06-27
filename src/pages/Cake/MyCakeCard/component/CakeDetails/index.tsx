import React from 'react';
import {Row, Col, Card, Avatar} from 'antd';
import Meta from 'antd/es/card/Meta';
import {Link} from '@umijs/max';

interface CakeDetailsProps {
  dateList: API.GoodsVO[];
}

const CakeDetails: React.FC<CakeDetailsProps> = (props) => {
  const { dateList } = props;
  return (
    <Row gutter={[16, 16]}>
      {
        dateList.map(item => (
          <Col key={item.id} span={6}>
            <Card
              style={{ width: '100%', height: '100%' }}
              cover={
                <img
                  alt={item.content}
                  src={item.goodsCover}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
              actions={[
                <Link key={item.id} to={`/cake/info/${item.id}`}>查看详情</Link>
              ]}

            >
              <Meta
                avatar={<Avatar src={item.userVO?.userAvatar} />}
                title={item.goodsName}
                description={item.content}
              />
            </Card>
          </Col>
        ))
      }
    </Row>
  );
};

export default CakeDetails;
