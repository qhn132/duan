import { Avatar, Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import LoginModal from './Auth/Login/LoginModal';
import RegisterModal from './Auth/Register/RegisterModal';
import './styles.scss';
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;

const HeaderBase = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { location } = history;
  const user: any = useSelector<any>((state) => state.auth);
  const { pathname } = location;
  const [visibleLoginModal, setvisibleLoginModal] = React.useState<boolean>(false);
  const [visibleRegisterModal, setvisibleRegisterModal] = React.useState<boolean>(false);
  const info = user?.profile?.data?.infoUser;

  const onClickLogo = () => {
    history.push('/');
  };

  const onClickLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  const onClickPersonal = () => {
    history.push('/personal');
  };

  const showModalRegister = () => {
    setvisibleRegisterModal(true);
  };

  const showModalLogin = () => {
    setvisibleLoginModal(true);
  };

  const hideModal = () => {
    setvisibleRegisterModal(false);
    setvisibleLoginModal(false);
  };

  const handleChangeMenu = ({ key }) => {
    history.push(key);
  };

  return (
    <div className="header">
      <div className="logo" onClick={onClickLogo}>
        <img src="/images/StandBy_Logo.png" alt="" />
      </div>
      <Menu mode="horizontal" activeKey={pathname} onSelect={handleChangeMenu}>
        <SubMenu
          key="a"
          title="Tiếng anh giao tiếp"
          icon={<CaretDownOutlined />}
          onTitleClick={() => console.log(1)}
        >
          <Menu.Item key="1">SubMenuItem 1</Menu.Item>
          <Menu.Item key="2">SubMenuItem 2</Menu.Item>
          <Menu.Item key="3">SubMenuItem 3</Menu.Item>
          <Menu.Item key="4">SubMenuItem 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="/courses/list">{t('Các khóa học')}</Menu.Item>
        <Menu.Item key="/gift">{t('Quà tặng')}</Menu.Item>
        <Menu.Item key="/blog">{t('Blog')}</Menu.Item>
        <SubMenu
          key="c"
          title={
            info ? (
              <div>
                <Avatar size={30} icon={<UserOutlined />} />
                {info?.name}
              </div>
            ) : (
              <div>
                <Avatar size={30} icon={<UserOutlined />} />
                Tài khoản
              </div>
            )
          }
        >
          {info ? (
            <>
              <Menu.Item key="personal" onClick={() => onClickPersonal()}>
                Thông tin cá nhân
              </Menu.Item>
              <Menu.Item key="logout" onClick={() => onClickLogout()}>
                Đăng xuất
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="register" onClick={() => showModalRegister()}>
                Đăng ký
              </Menu.Item>
              <Menu.Item key="login" onClick={() => showModalLogin()}>
                Đăng nhập
              </Menu.Item>
            </>
          )}
        </SubMenu>
      </Menu>
      <LoginModal isVisible={visibleLoginModal} onCancel={hideModal} />
      <RegisterModal isVisible={visibleRegisterModal} onCancel={hideModal} />
    </div>
  );
};

export default React.memo(HeaderBase);
