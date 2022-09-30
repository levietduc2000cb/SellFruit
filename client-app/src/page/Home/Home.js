import styles from "./Home.module.css";
import classNames from "classnames/bind";
import SimpleCarousel from "~/components/SimpleCarousel";
import CategpryBanner from "~/components/CategpryBanner";
import PresentProducts from "~/components/PresentProducts";
import BannerMain2 from "~/components/BannerMain2";
import SectionBottomHome from "~/components/SectionBottomHome";

function Home() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("home-page")}>
      <SimpleCarousel></SimpleCarousel>
      <CategpryBanner></CategpryBanner>
      <PresentProducts
        title="Trái cây nhập khẩu"
        text="Là nhà cung cấp thực phẩm tươi sạch hàng đầu khu vực phía nam"
        btnDisplay
        LinebackGroundColor
        TextColorTitle
        ApiProducts={`fruitItems/getNamebyType`}
        typeProduct="Trái cây nhập khẩu"
      ></PresentProducts>
      <BannerMain2></BannerMain2>
      <PresentProducts
        title="Trái cây nội địa"
        text="Có hàng ngàn mẫu hoa quả tươi đủ loại cho bạn chọn!"
        marginTop
        btnDisplay
        LinebackGroundColor
        TextColorTitle
        ApiProducts={`fruitItems/getNamebyType`}
        typeProduct="Trái cây nội địa"
      ></PresentProducts>
      <PresentProducts
        title="Các loại nước ép"
        text="Mang lại sự sản khoái khi thưởng thức nước ép tại Halona Fruits"
        backGroundImg
        boderTopAndBottom
        ApiProducts={`fruitItems/getNamebyType`}
        typeProduct="Nước ép"
      ></PresentProducts>
      <SectionBottomHome></SectionBottomHome>
    </div>
  );
}

export default Home;
