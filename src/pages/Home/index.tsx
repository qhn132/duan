import React from 'react';
import './style.scss';
import { Typography, Button, List, Card } from 'antd';
import { useHistory } from 'react-router';
import { CheckOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Text } = Typography;
const { Meta } = Card;

const Home = () => {
  const data = [
    {
      id: '1',
      title: 'Course 1',
      time: '7 buổi',
    },
    {
      id: '2',
      title: 'Course 2',
      time: '7 buổi',
    },
    {
      id: '3',
      title: 'Course 3',
      time: '7 buổi',
    },
    {
      id: '4',
      title: 'Course 4',
      time: '7 buổi',
    },
  ];
  const history = useHistory();
  const handleClickDetail = (id) => {
    history.push(`/detail/${id}`);
  };
  return (
    <div className="home-page">

      <div className="banner">
        <div className="left">
          <div className="wellcome">
            <Text>Welcome to Elearning</Text>
          </div>
          <div className="description">
            <Text>
              No coding, no server skills needed! With Landerlab, you can create, edit, and publish
              beautiful and responsive landing pages that convert more in a matter of clicks.
            </Text>
          </div>
          <Button className="btn-start-trial">Start free trial</Button>
        </div>
        <div className="right">
          <img src="/images/right-banner.png" alt="" />
        </div>
      </div>
      {/* end banner */}
      <div className="course">
        <div className="title-course">
          <p className="title">Các khóa học</p>
          <p className="sub-title">Trung tâm tiếng anh elearning</p>
        </div>
        <div className="description-course">
          <p>
            Với sự đa dạng hóa của các khóa học online, mỗi học viên sẽ có cơ hội trải nghiệm các
            phương pháp học tiếng Anh độc đáo, chỉ có duy nhất tại Elearning. Học viên sẽ dễ dàng
            tiếp nhận kiến thức mới nhờ phương pháp giảng dạy tinh - gọn - nhẹ từ những giảng viên
            xuất sắc trên toàn quốc
          </p>
        </div>
      </div>
      <div className="list-course">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={
                  <img
                    alt="img"
                    src="https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png"
                  />
                }
              >
                <Meta title={item?.title} description={'Thời lượng: ' + item?.time} />
                <hr />
                <Button onClick={() => handleClickDetail(item.id)}>Xem chi tiết</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
      <div className="why-choose-me">
        <div className="title-course">
          <p className="title">LÍ DO VÌ SAO CHỌN</p>
          <p className="sub-title">Trung tâm elearning</p>
          <p>
            Được thành lập từ năm 2019, sau hơn 2 năm phát triển, Elarning đã trở thành đơn vị đào
            tạo tiếng Anh dày dặn kinh nghiệm.
          </p>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>
                  <CheckOutlined />
                </th>
                <th>
                  <CheckOutlined />
                </th>
                <th>
                  <CheckOutlined />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Đào tạo hơn 10.000 bạn trẻ mất gốc tiếng Anh, sở hữu chứng chỉ TOIEC, Luyện thi ĐH
                  môn Anh với điểm số cao
                </td>
                <td>
                  Lộ trình học tại trung tâm Elearning được thiết kế theo giáo trình riêng, rõ ràng,
                  tinh gọn và hiệu quả.
                </td>
                <td>
                  Đội ngũ giảng viên, trợ giảng chuyên nghiệp đến từ các trường đại học danh tiếng
                  trong và ngoài nước.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="about-us">
        <div className="course">
          <div className="title-course">
            <p className="title">Giới Thiệu</p>
            <p className="sub-title">Trung tâm tiếng anh elearning</p>
          </div>
          <div className="description-course">
            <p>
              Elearning cập nhật thường xuyên và liên tục những thông tin bên lề kỳ thi TOEIC. Không
              chỉ đem lại tin tức, đây còn là nguồn tài liệu bổ ích về tiếng Anh đồng thời là nơi
              cung cấp thông tin về những ưu đãi khủng theo từng khóa học.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <iframe
              src="https://www.youtube.com/embed/iMzMRhBx9mQ?list=RDGLvkMKkQZVY"
              title="YouTube video player"
              width={480}
              height={300}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="right">
            <p className="title">Ưu đãi khóa học</p>
            <p className="sub-title">ƯU ĐÃI NGẬP TRÀN - HỌC BỔNG NGẬP TRÀN</p>
            <ul>
              <li>Đăng ký càng sớm, ưu đãi càng lớn</li>
              <li>Tặng sổ tay mini xinh xắn</li>
              <li>Mức ưu đãi lên tới 600K khi đăng ký nhóm từ 3 thành viên trở lên</li>
            </ul>
            <p>Ưu đãi áp dụng cho những học viên đăng ký khóa học trước ngày khai giảng 10 ngày</p>
            <NavLink to="/gift">Learn More</NavLink>
          </div>
        </div>
        <div className="ads">
          <div className="left">
            <div className="title">
              <p>You don't have communication skills?</p>
            </div>
            <div className="sub-title">
              <p>We have our courses with teachers ready to help you improve your English.</p>
            </div>
          </div>
          <div className="right">
            <Button className="btn-contact-us">CONTACT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
