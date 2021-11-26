import React from 'react';
import './style.scss';
import { Tabs } from 'antd';
import Profile from './Components/Profile';
import MyClass from './Components/MyClass';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileActions } from 'actions/auth';

const { TabPane } = Tabs;

const Personal = () => {

  const user: any = useSelector<any>((state) => state.auth);
  const info = user?.profile?.data?.infoUser;
  const dispatch = useDispatch();
  React.useEffect( () => {
    // dispatch(getProfileActions());
    console.log(user);
  } , [] )
  return (
    <div className="personal">
      <Tabs tabPosition='left' defaultActiveKey="1" size="large">
        <TabPane tab="Thông tin cá nhân" key="1">
          <Profile data={info}/>
        </TabPane>
        <TabPane tab="Lớp học của tôi" key="2">
          <MyClass data={info}/>
        </TabPane>
        <TabPane tab="Lịch sử thanh toán" key="3">
          Content of Tab 3
        </TabPane>
        <TabPane tab="Quà tặng" key="4">
          Content of Tab 3
        </TabPane>
        <TabPane tab="Elearning" key="5">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default React.memo(Personal);
