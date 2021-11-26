import { Modal, Form, Input, Button, message } from 'antd';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'actions/auth';
import { useHistory } from 'react-router'


const LoginModal = ({ onCancel, isVisible }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const user: any = useSelector<any>((state) => state.auth);

  const renderTitle = () => {
    return <div className="md-title-login">Đăng nhập</div>;
  };
  const handleOk = () => {};

  const onFinish = (values: any) => {
    dispatch(loginAction(values))
  };

  useEffect(() => {
    if(user?.isLogin){
      message.success('Đăng nhập thành công !')
      onCancel();
      history.push('/personal');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.isLogin])

  useEffect(() => {
    if(user?.message !== ''){
      message.error(user?.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.message])

  return (
    <div className="modal modal-login">
      <Modal
        title={renderTitle()}
        visible={isVisible}
        onOk={handleOk}
        onCancel={onCancel}
        centered
        width={621}
        footer={null}
      >
        <Form
          name="basic"
          form={form}
          className="form-login"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout={'vertical'}
          autoComplete="off"
        >
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

          <div>
            <NavLink className="forgot-password" to="">
              Quên mật khẩu
            </NavLink>
          </div>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button className="btn-login" type="primary" htmlType="submit">
              Đăng Nhập
            </Button>
            <Button className="btn-login-facebook" type="primary" htmlType="submit">
              Đăng nhập bằng tài khoản facebook
            </Button>
            <Button className="btn-login-google" type="primary" htmlType="submit">
              Đăng nhập bằng tài khoản google
            </Button>
          </Form.Item>
            
        </Form>
      </Modal>
    </div>
  );
};

export default React.memo(LoginModal);
