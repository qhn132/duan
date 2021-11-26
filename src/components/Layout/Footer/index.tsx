import React from 'react';
import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <p className="title">Công ty cổ phần Elearn</p>
        <div className="sub-title">
          <ul>
            <li>Số điện thoại:</li>
            <li>Thời gian hỗ trợ: 8h30 - 17h30 (Thứ 2 đến thứ 7)</li>
            <li>Email: abcd@gmail.com</li>
            <li>Địa chỉ: Số 1, Trịnh Văn Bô, Phương Canh, Nam Từ Liêm, Hà Nội</li>
          </ul>
        </div>
      </div>
      <div className="right">
          <p className="copyright">© 2021 Elearning.com</p>
          <ul>
              <li>Giấy Chứng nhận đăng ký doanh nghiệp số 031 456 6445 - Sở KHĐT TPHCM cấp ngày 10/08/2017</li>
              <li>Người đại diện: Nguyễn Thị A</li>
              <li>Bằng độc quyền giải pháp hữu ích số 1129 - Cục SHTT cấp</li>
              <li>Giấy Chứng nhận đăng ký nhãn hiệu số 162015 – Cục SHTT cấp</li>
          </ul>
      </div>
    </div>
  );
};

export default React.memo(Footer);
