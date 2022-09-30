import styles from "./ButtonAddCartAndBuy.module.css";
import classNames from "classnames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ButtonAddCartAndBuy({ onHandleAddCart, onHandleBuy }) {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("product_detail_container_method")}>
      <button
        onClick={onHandleAddCart}
        className={cx("product_detail_container_method_add_cart")}
      >
        <span>
          <AiOutlineShoppingCart />
        </span>
        <span>Thêm vào giỏ hàng</span>
      </button>
      <button
        onClick={onHandleBuy}
        className={cx("product_detail_container_method_buy")}
      >
        <span>Mua ngay</span>
      </button>
    </div>
  );
}

export default ButtonAddCartAndBuy;
