import styles from "./Introduce.module.css";
import classNames from "classnames/bind";
import InformationIntroduce from "~/components/InformationIntroduce";
import imgInfor1 from "~/asset/image/information_introduce_1.jpg";
import imgInfor2 from "~/asset/image/information_introduce_2.JPG";
import imgInfor3 from "~/asset/image/information_introduce_3.jpg";
import SideBarNews from "~/components/SideBarNews";

function Introduce() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("introduce_page")}>
      <div className={cx("introduce_wrapper")}>
        <div className={cx("introduce_section_1")}>
          <h1 className={cx("introduce_text")}>Giới thiệu</h1>
          <InformationIntroduce
            id="information"
            title="Thông tin về Halona"
            imgLink={imgInfor1}
          >
            Halona Group là một công ty thương mại điện tử quốc tế được thành
            lập bởi Maximilian Bittner với sự hỗ trợ của Rocket Internet vào năm
            2012. Halona Group là nền tảng thương mại điện tử hàng đầu Đông Nam
            Á. Với sự hiện diện tại sáu quốc gia - Indonesia, Malaysia,
            Philippines, Singapore, Thái Lan và Việt Nam - Halona kết nối khu
            vực rộng lớn và đa dạng này thông qua khả năng công nghệ, hậu cần và
            thanh toán. Ngày nay, Halona có sự lựa chọn lớn nhất về thương hiệu
            và người bán, và đến năm 2030, Halona đặt mục tiêu phục vụ 300 triệu
            khách hàng.<br></br>Năm 2016, Halona trở thành lá cờ đầu trong khu
            vực của Tập đoàn Alibaba và được hỗ trợ bởi cơ sở hạ tầng công nghệ
            tốt nhất của Alibaba.<br></br>Vào tháng 8 năm 2018, Halona là nhà
            điều hành thương mại điện tử lớn nhất Đông Nam Á dựa trên số lượt
            truy cập web trung bình hàng tháng.<br></br>Vào tháng 9 năm 2019,
            Halona group tuyên bố đây là nền tảng thương mại điện tử hàng đầu ở
            Đông Nam Á với hơn 50 triệu người mua hàng hoạt động hàng năm
          </InformationIntroduce>
          <InformationIntroduce
            id="source"
            title="Nguồn gốc Halona"
            imgLink={imgInfor2}
          >
            Halona Việt Nam được thành lập vào tháng 3 năm 2012 là một sàn giao
            dịch thương mại điện tử, cung cấp sản phẩm trên nhiều ngành hàng
            khác nhau như nội thất, điện thoại máy tính bảng, thời trang và phụ
            kiện, sản phẩm chăm sóc sức khỏe, làm đẹp, đồ chơi và đồ dùng thể
            thao. Halona Việt Nam là một phần của Halona Group thuộc sở hữu tập
            đoàn Alibaba - tập đoàn thương mại điện tử đa quốc gia và hiện đang
            có chi nhánh tại Indonesia, Philippin, Singapore, Thái Lan và
            Malaysia.<br></br>
            Halona Việt Nam đặt trụ sở chính tại lầu 19, 20 Saigon Centre, 67 Lê
            Lợi, phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh. Chi nhánh kho
            giao nhận, đổi trả chính:<br></br>Kho xưởng 1-2 có địa chỉ tại Cụm
            1, Đường M14, KCN Tân Bình mở rộng, phường Bình Hưng Hòa, Q. Bình
            Tân, TP. Hồ Chí Minh.<br></br>Kho Halona.vn có địa chỉ tại Nhà kho
            số 1, thửa đất sô 7, tờ bản đồ 5, thôn Roi Sóc, xã Phù Chẩn, Thị Xã
            Từ Sơn, Tỉnh Bắc Ninh
          </InformationIntroduce>
          <InformationIntroduce
            id="field_of_activity"
            title="Lĩnh vực hoạt động"
            imgLink={imgInfor3}
          >
            Halona ngoài việc cung cấp các sản phẩm, dịch vụ thì đã phần các sản
            phẩm trên Halona.vn đều là của các cá nhân, doanh nghiệp, công ty
            đăng bán, Halona giống như một cửa hàng và cho các đối tác đó thuê
            các gian hàng để bán và sẽ thu phần trăm hoa hồng từ họ. Chính vì
            vậy nên sản phẩm trên Halona rất đa dạng và phong phú.<br></br>Hầu
            hết tất cả các mặt hàng có khả năng giao được đều có mặt trên đây
            như: nội thất, điện thoại máy tính bảng, thời trang và phụ kiện, sản
            phẩm chăm sóc sức khỏe, làm đẹp, đồ chơi và đồ dùng thể thao. Có thể
            nói mọi nhu cầu mua sắm của bạn đều có thể được đáp ứng trên đây khi
            các sản phẩm có giá trị thấp cũng được đăng bán trên Halona.vn.
          </InformationIntroduce>
          <InformationIntroduce
            id="policy"
            title="Chính sách chất lượng"
            imgLink={imgInfor3}
          >
            Có rất nhiều chính sách bán hàng được Halona sử dụng trong thời điểm
            hiện tại. Trong đó các chính sách thường dùng phổ biến là:<br></br>{" "}
            1. Chương trình tri ân khách hàng: <br></br>Tri ân khách hàng là một
            trong những chính sách bán hàng khá phổ biến được nhiều doanh nghiệp
            áp dụng. Mỗi đối tượng khách hàng cụ thể sẽ được áp dụng các chương
            trình tri ân riêng biệt. Chương trình tri ân khách hàng này thường
            được sử dụng các các cửa hàng lớn, nếu khách hàng mua hàng tại đây
            sẽ có được những quà tặng và ưu đãi cực kỳ hấp dẫn. Ví dụ: Chương
            trình tri đối với những khách hàng có sinh nhật vào tháng 8 khi mua
            hàng sẽ giảm 30% trên tổng các đơn hàng, hoặc tặng một áo mưa khi
            mua đơn hàng trên 1 triệu đồng. <br></br>2. Khuyến mãi đặt giá trong
            các sản phẩm bán lẻ:<br></br>
            Khi bạn bán hàng qua Facebook, Zalo hay các sàn thương mại điện tử
            thì cách đặt giá khuyến mãi trọng các sản phẩm rất quan trọng, nó sẽ
            kích thích được khách mua hàng, vì khách hàng sẽ cảm thấy mình có
            nhiều lợi ích khi mua được hàng với giá rẻ hơn. Một cái áo có giá
            99k thì chắc chắn rằng nó sẽ rẻ hơn cái áo có giá 100k cả về tâm lý
            người mua và giá cả. Khi chưa chạm đến ngưỡng đầu số lớn hơn thì
            khách hàng vẫn sẽ cảm thấy mình được mua hàng với giá ưu đãi. Đây có
            lẽ là trường hợp bạn thường gặp khi mua hàng online đúng không nào.
            Bây giờ bạn hãy áp dụng ngay tuyệt chiêu này để thu hút nhiều khách
            mua hàng hơn nhé.
          </InformationIntroduce>
        </div>
        <SideBarNews></SideBarNews>
      </div>
    </div>
  );
}

export default Introduce;
