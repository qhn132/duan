import React from 'react';
import './style.scss';
import { Button, Table } from 'antd';

const MyClass = ({ data }) => {
  const { class: dataSource } = data || [];

  const columns = [
    {
      title: 'Tên khóa học',
      dataIndex: 'name',
      width: "500px",
      render: (item) => {
        return <p className="class-name">{item}</p>;
      },
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      width: "200px",
    },
    {
      title: 'Trạng thái',
      width: "200px",
      render: (item) => {
        if (item?.status) {
          return <p className="status-true">Đã thanh toán</p>;
        } else {
          return <p className="status-false">Chưa thanh toán</p>;
        }
      },
    },
    {
      title: 'Hành động',
      width: "300px",
      render: (item) => {
        if (item?.status) {
          return (
            <div>
              <Button className="btn-join">Vào lớp</Button>
              <Button className="btn-cancel">Hủy lớp</Button>
            </div>
          );
        } else {
          return <Button className="btn-payment">Thanh toán</Button>;
        }
      },
    },
  ];

  return (
    <div className="my-class">
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default React.memo(MyClass);
