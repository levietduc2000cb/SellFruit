import styles from "./SideBar.module.css";
import classNames from "classnames/bind";

function SideBar({ onHandleType, type }) {
  let cx = classNames.bind(styles);
  const typeItems = [
    { type: "all", content: "Tất cả sản phẩm" },
    { type: "Trái cây nhập khẩu", content: "Trái cây nhập khẩu" },
    { type: "Trái cây nội địa", content: "Trái cây nội địa" },
    { type: "Hạt dinh dưỡng", content: "Các loại hạt dinh dưỡng" },
    { type: "Nước ép", content: "Nước ép" },
    { type: "Sản phẩm khác", content: "Sản phẩm khác" },
  ];
  return (
    <ul className={cx("products_side-bar_container")}>
      <p className={cx("products_side-bar_title")}>Danh mục sản phẩm</p>
      {typeItems.map((typeItem, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              onHandleType(typeItem.type);
            }}
            className={cx("products_side-bar_type", {
              active: type === typeItem.type,
            })}
          >
            {typeItem.content}
          </li>
        );
      })}
    </ul>
  );
}

export default SideBar;
