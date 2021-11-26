import React from 'react';
import './style.scss';
import { Tabs } from 'antd';
import ContentCourse from './ContentCourse'

const { TabPane } = Tabs;

const Course = () => {
  const data = {
    id: '1',
    title: 'Học tiếng anh cơ bản',
    course: [
      {
        id: '1',
        title: 'Bài 1: Từ Vựng',
        video: 'https://www.youtube.com/embed/yK6EHgBuHEo',
      },
      {
        id: '2',
        title: 'Bài 2: Các Thì',
        video: 'https://www.youtube.com/embed/dTDD4IMXYk8',
      },
      {
        id: '3',
        title: 'Bài 3: Cấu Trúc',
        video: 'https://www.youtube.com/embed/dryer22vOig',
      },
      {
        id: '4',
        title: 'Bài 4: DEMO',
        video: 'https://www.youtube.com/embed/RjmXFtz6p4U',
      },
    ],
  };

  return (
    <div className="main-course">
      <h3 className="title-comm"><span className="title-holder">{data?.title}</span></h3>
      <div className="tabs">
        <Tabs size="large" defaultActiveKey="1" tabPosition="right">
          {data?.course?.map((course, index) => {
            return (
              <TabPane tab={course?.title} key={index + 1}>
                <div className="content">
                  <ContentCourse course={course} />
                </div>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default React.memo(Course);
