import React from 'react';
import { Avatar, Upload, Button, Input, Form, Select, DatePicker } from 'antd';
import './style.scss';
import { DollarCircleOutlined, UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Profile = ({ data }) => {
  const onFinish = (values: any) => {
    console.log('data', values);
  };
  return (
    <div className="profile">
      <div className="left">
        <Form layout="vertical">
          <div className="avatar">
            <Avatar src={data?.avatar} size={200} />
          </div>
          <div className="coins">
            <DollarCircleOutlined />
            {data?.coins}
          </div>
          <Form.Item className="update-avatar">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Tiểu sử" className="history">
            <TextArea defaultValue={data?.history} rows={8} />
          </Form.Item>
        </Form>
      </div>
      <div className="right">
        <Form
          initialValues={data}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size="large"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Họ và tên"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="language" label="Ngôn ngữ">
            <Select>
              <Select.Option value="vn">Tiếng Việt</Select.Option>
              <Select.Option value="en">Tiếng Anh</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            name="birth"
            rules={[{ required: true, message: 'Please input your date!' }]}
          >
            <DatePicker placeholder="Chọn ngày sinh" />
          </Form.Item>
          <br /><br /><br />
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
            <Button type="default">Đổi mật khẩu</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Profile);
