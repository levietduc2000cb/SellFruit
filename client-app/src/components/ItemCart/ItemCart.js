import styles from "./ItemCart.module.css";
import classNames from "classnames/bind";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrSubtract, GrAdd } from "react-icons/gr";
import handleNumberPrice from "~/util/handleNumberPrice";
import { useDispatch } from "react-redux";
import {
  addAmount,
  subtractAmount,
  removeCartItem,
} from "~/redux/reduxSlices/cartItemSlice";
function ItemCart({ imgLink, name, realPrice, amount, indexItem }) {
  let cx = classNames.bind(styles);

  const dispatch = useDispatch();

  const handleAmountAdd = () => {
    dispatch(addAmount({ index: indexItem, amount }));
  };
  const handleAmountSubtract = () => {
    dispatch(subtractAmount({ index: indexItem, amount }));
  };

  const handleRemoveItemInCart = (e) => {
    e.stopPropagation();
    dispatch(removeCartItem(indexItem));
  };

  return (
    <tr className={cx("item_cart")}>
      <td className={cx("item_cart_product")}>
        <span className={cx("item_cart_icon_wrapper")}>
          <AiOutlineCloseCircle
            className={cx("item_cart_icon-close")}
            onClick={handleRemoveItemInCart}
          ></AiOutlineCloseCircle>
        </span>
        <img
          src={imgLink}
          alt="img-fruit"
          className={cx("item_cart_img-item")}
        ></img>
        <span className={cx("item_cart_name-item")}>{name}</span>
      </td>
      <td>
        <span className={cx("item_cart_price")}>
          {handleNumberPrice(realPrice)}
          <strong>đ</strong>
        </span>
      </td>
      <td>
        <div className={cx("cart_item_amount")}>
          <span
            className={cx("cart_item_icon-subtract")}
            onClick={handleAmountSubtract}
          >
            <GrSubtract></GrSubtract>
          </span>
          <span className={cx("cart_item_amount_number")}>{amount}</span>
          <span className={cx("cart_item_icon-add")} onClick={handleAmountAdd}>
            <GrAdd></GrAdd>
          </span>
        </div>
      </td>
      <td>
        <span className={cx("item_cart_total_price")}>
          {handleNumberPrice(realPrice * amount)}
          <strong>đ</strong>
        </span>
      </td>
    </tr>
  );
}

export default ItemCart;
