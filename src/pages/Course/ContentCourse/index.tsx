import { Tabs } from 'antd';
import React from 'react';
import './style.scss';

const { TabPane } = Tabs;

const ContentCourse = ({ course }) => {
  return (
    <div className="content-course">
      <iframe
        width="1300"
        height="500"
        src={course?.video}
        title={course?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <h2 className="course-title">{course?.title}</h2>
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab="Nội dung bài học" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Bài tập" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tài liệu sử dụng" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Trao đổi bài học" key="4">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default React.memo(ContentCourse);
