import styles from "./CategoryBanner.module.css";
import classNames from "classnames/bind";

function CategoryBanner() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("category-banner")}>
      <div className={cx("category-banner_wrapper")}>
        <div className={cx("category-banner_container")}>
          <div className={cx("category-banner_container_img_wrapper")}>
            <img
              src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/qua-1.jpg"
              alt="category-banner_image"
              className={cx("category-banner_image")}
            ></img>
          </div>
          <div className={cx("category-banner_des")}>
            <span className={cx("category-banner_des_title")}>Rau củ tươi</span>
            <br></br>
            <span className={cx("category-banner_des-text")}>
              Được kiểm định rõ ràng
            </span>
          </div>
        </div>
        <div className={cx("category-banner_container")}>
          <div className={cx("category-banner_container_img_wrapper")}>
            <img
              src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/qua2aa.jpg"
              alt="category-banner_image"
              className={cx("category-banner_image")}
            ></img>
          </div>
          <div className={cx("category-banner_des")}>
            <span className={cx("category-banner_des_title")}>
              Thực phẩm sạch
            </span>
            <br></br>
            <span className={cx("category-banner_des-text")}>
              Quy trình sản xuất kín
            </span>
          </div>
        </div>
        <div className={cx("category-banner_container")}>
          <div className={cx("category-banner_container_img_wrapper")}>
            <img
              src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/qua-3.jpg"
              alt="category-banner_image"
              className={cx("category-banner_image")}
            ></img>
          </div>
          <div className={cx("category-banner_des")}>
            <span className={cx("category-banner_des_title")}>
              Trái cây tươi
            </span>
            <br></br>
            <span className={cx("category-banner_des-text")}>
              Nhập khẩu & Trong nước
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
