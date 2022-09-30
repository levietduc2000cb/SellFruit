import styles from "./Item.module.css";
import classNames from "classnames/bind";
import { PathRoutes } from "~/routes/PathRoutes";
import { Link } from "react-router-dom";
import handleNumberPrice from "~/util/handleNumberPrice";

function Item({
  linkPicture,
  nameItem,
  priceOld = 0,
  priceItem = 0,
  sale,
  idItem,
}) {
  let cx = classNames.bind(styles);
  return (
    <Link
      to={`${PathRoutes.products}/${idItem}`}
      className={cx("present-products_container")}
    >
      <img
        src={linkPicture}
        alt={linkPicture}
        className={cx("present-products_img")}
      ></img>
      <div className={cx("present-products_name")}>{nameItem}</div>
      <div className={cx("present-products_price")}>
        <span
          className={cx("present-products_old-price", {
            present_products_old_price_visible: sale === 0,
          })}
        >
          {handleNumberPrice(priceOld)}
          <strong>đ</strong>
        </span>
        <span className={cx("present-products_new-price")}>
          {handleNumberPrice(priceItem)}
          <strong>đ</strong>
        </span>
      </div>
      <div className={cx("present-products_wrapper-button")}>
        <button className={cx("present-products_button")}>Mua ngay</button>
      </div>
      {sale > 0 && (
        <div className={cx("present-products-sale")}>
          <span>{`-${sale}%`}</span>
        </div>
      )}
    </Link>
  );
}

export default Item;
