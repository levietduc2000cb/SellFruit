import styles from "./Carts.module.css";
import classNames from "classnames/bind";
import CartEmpty from "~/components/CartEmpty";
import CartNotEmpty from "~/components/CartNotEmpty";
import { useSelector } from "react-redux";

function Carts() {
  let cx = classNames.bind(styles);

  const { cartItems } = useSelector((state) => state.cartItem);
  return (
    <div className={cx("carts_page")}>
      {cartItems.length > 0 ? (
        <CartNotEmpty></CartNotEmpty>
      ) : (
        <CartEmpty></CartEmpty>
      )}
    </div>
  );
}

export default Carts;
