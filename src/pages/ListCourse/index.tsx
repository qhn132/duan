import React from 'react';
import './style.scss';
import { Avatar, Rate, Button } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

const ListCourse = () => {
  const history = useHistory();

  const data = [
    {
      id: '1',
      title: 'Title 1',
      img: 'https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png',
      student: '12',
      rate: 3,
      price: '1.200.000',
      profile: [
        {
          id: 1,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 2,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 3,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 4,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 5,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
      ],
    },
    {
      id: '2',
      title: 'Title 2',
      img: 'https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png',
      student: '13',
      rate: 4,
      price: '1.200.000',

      profile: [
        {
          id: 1,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 2,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 3,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 4,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 5,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
      ],
    },
    {
      id: '3',
      title: 'Title 3',
      img: 'https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png',
      student: '14',
      price: '1.200.000',

      rate: 5,
      profile: [
        {
          id: 1,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 2,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 3,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 4,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
        {
          id: 5,
          title: 'Đội ngũ giáo viên Việt & Mỹ giảng bài, Đội ngũ giáo viên Việt & Mỹ giảng bài',
        },
      ],
    },
  ];

  const onClickItem = (id: string) => {
    history.push(`/course/${id}`);
  };

  return (
    <div className="list-course">
      {data?.map((course, index) => {
        return (
          <div className="course-item" key={index}>
            <div className="left">
              <img src={course?.img} alt={course?.title} />
            </div>
            <div className="content">
              <h1>{course?.title}</h1>
              <div className="description">
                <div className="head">
                  <Avatar size={20} icon={<UserOutlined />} />
                  <p>Học viên: {course.student}</p>
                  <div className="rate">
                    <Rate disabled defaultValue={course?.rate} />
                  </div>
                </div>
                <div className="foot">
                  <ul>
                    {course?.profile?.map((item, index) => {
                      return <li key={index}>{item.title}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="price">{course?.price}Đ</div>
              <Button className="btn-detail" onClick={() => onClickItem(course.id)}>
                {' '}
                Xem Chi Tiết{' '}
              </Button>
            </div>
            <div className="right">
              <div className="box">
                <h1>Thông tin tóm tắt</h1>
                <ul>
                  <li>Số lượng: 5 bài</li>
                  <li>Bài tập: 5 bài</li>
                  <li>Thời lượng: 1.5h</li>
                  <li>Tài liệu: 0</li>
                  <li>Học trên mọi thiết bị có kết nối internet</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ListCourse);
