import { Modal, Form, Input, Button, message } from 'antd';
import React from 'react';
import { registerApi } from '../../../../../api/auth';

const RegisterModal = ({ onCancel, isVisible }) => {
  const [form] = Form.useForm();
  const handleOk = () => {};
  const onFinish = async (values: any) => {
    try {
      const result = await registerApi(values);
      if (result.status === 201) {
        message.success('Đăng ký thành công, kiểm tra Email để kích hoạt tài khoản !');
        onCancel();
        form.resetFields();
      } else {
        message.error('Có lỗi xảy ra');
      }
    } catch (error: any) {
      message.error(error?.response?.response?.data?.error);
    }
  };
  const renderTitle = () => {
    return <div className="md-title-login">Đăng Kí</div>;
  };
  return (
    <div className="modal modal-register">
      <Modal
        title={renderTitle()}
        visible={isVisible}
        onOk={handleOk}
        onCancel={onCancel}
        centered
        footer={null}
        width={800}
      >
        <Form
          name="basic"
          form={form}
          className="form-register"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout={'vertical'}
          autoComplete="off"
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            className="label-login"
            rules={[{ required: true, message: 'Bạn chưa nhập họ và tên!' }]}
          >
            <Input className="input-login" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            className="label-login"
            rules={[{ required: true, message: 'Bạn chưa nhập Email!' }]}
          >
            <Input className="input-login" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            className="label-login"
            name="password"
            rules={[{ required: true, message: 'Bạn chưa nhập mật khẩu!' }]}
          >
            <Input.Password className="input-login" />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            className="label-login"
            name="re-password"
            rules={[{ required: true, message: 'Bạn chưa xác nhận mật khẩu!' }]}
          >
            <Input.Password className="input-login" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button className="btn-login" type="primary" htmlType="submit">
              Đăng Kí
            </Button>
            <Button className="btn-login-facebook" type="primary" htmlType="submit">
              Đăng kí bằng tài khoản facebook
            </Button>
            <Button className="btn-login-google" type="primary" htmlType="submit">
              Đăng kí bằng tài khoản google
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default React.memo(RegisterModal);
