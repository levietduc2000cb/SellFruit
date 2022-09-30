import styles from "./ProductInfoBasicAndPrice.module.css";
import classNames from "classnames/bind";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
// import { MdError } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { useLayoutEffect, useState } from "react";
import Toast from "~/components/Toast";
import ToastWatchUser from "~/components/ToastWatchUser";
import handleNumberPrice from "~/util/handleNumberPrice";
import ImageProductDetail from "~/components/ImageProductDetail";
import ButtonUpdateAndRemove from "~/components/ButtonUpdateAndRemove";
import ButtonAddCartAndBuy from "~/components/ButtonAddCartAndBuy";
import ShowNotification from "~/components/ShowNotification";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "~/redux/reduxSlices/cartItemSlice";
import { PathRoutes } from "~/routes/PathRoutes";
import { useNavigate } from "react-router-dom";

function ProductInfoBasicAndPrice({
  id,
  img,
  name,
  nutritionalValue,
  origin,
  preserve,
  price,
  realPrice,
  sale,
  date,
}) {
  let cx = classNames.bind(styles);
  const listImg = [img];

  const [amountItem, setAmountItem] = useState(1);

  const [showNotiUserLogin, setShowNotiUserLogin] = useState(false);
  const [showAddCart, setShowAddCart] = useState(false);

  const { userLogin, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubtract = () => {
    setAmountItem((pre) => pre - 1);
  };
  const handleAdd = () => {
    setAmountItem((pre) => pre + 1);
  };
  useLayoutEffect(() => {
    if (amountItem < 1) {
      setAmountItem(1);
    }
  }, [amountItem]);

  const handleAddCart = () => {
    if (userLogin) {
      dispatch(addCartItem({ img, name, realPrice, amountItem }));
      setShowAddCart(true);
      setTimeout(() => {
        setShowAddCart(false);
      }, 1800);
    } else {
      setShowNotiUserLogin(true);
    }
  };

  const handleBuy = () => {
    if (userLogin) {
      dispatch(addCartItem({ img, name, realPrice, amountItem }));
      navigate(PathRoutes.pay);
    } else {
      setShowNotiUserLogin(true);
    }
  };

  const handleCancleNotify = () => {
    setShowNotiUserLogin(false);
  };

  return (
    <div className={cx("product_detail_container_section_1")}>
      <ImageProductDetail listImg={listImg} sale={sale}></ImageProductDetail>
      <div className={cx("product_detail_container_detail-product")}>
        <div className={cx("product_detail_container_detail-name")}>{name}</div>
        <div className={cx("product_detail_container_detail-product_wrapper")}>
          <div className={cx("product_detail_container_detail-product_price")}>
            <span
              className={cx(
                "product_detail_container_detail-product_price_old"
              )}
            >
              {handleNumberPrice(price)}
              <strong>đ</strong>
            </span>
            <span
              className={cx(
                "product_detail_container_detail-product_price_new"
              )}
            >
              {handleNumberPrice(realPrice)}
              <strong>đ</strong>
            </span>
          </div>
          <ul className={cx("product_detail_container_introduce")}>
            <li className={cx("product_detail_container_introduce_container")}>
              <span>Xuất sứ: </span>
              <span>{origin}</span>
            </li>
            <li className={cx("product_detail_container_introduce_container")}>
              <span>Bảo quản: </span>
              <span>{preserve}</span>
            </li>
            <li className={cx("product_detail_container_introduce_container")}>
              <span>Ngày bán: </span>
              <span>{new Date(date).toLocaleDateString()}</span>
            </li>
            <li className={cx("product_detail_container_introduce_container")}>
              <span>Giá trị dinh dưỡng: </span>
              <span>{nutritionalValue}</span>
            </li>
          </ul>
          {!userInfo.admin && (
            <div className={cx("product_detail_container_amount")}>
              <div className={cx("product_detail_container_amount_title")}>
                Số lượng:
              </div>
              <div className={cx("product_detail_container_amount_wrapper")}>
                <span
                  onClick={handleSubtract}
                  className={cx("product_detail_container_amount_subtract")}
                >
                  <GrFormSubtract
                    className={cx("product_detail_container_amount_icon")}
                  ></GrFormSubtract>
                </span>
                <span className={cx("product_detail_container_amount_number")}>
                  {amountItem}
                </span>
                <span
                  onClick={handleAdd}
                  className={cx("product_detail_container_amount_add")}
                >
                  <GrFormAdd
                    className={cx("product_detail_container_amount_icon")}
                  ></GrFormAdd>
                </span>
              </div>
            </div>
          )}
          {userInfo.admin ? (
            <ButtonUpdateAndRemove idItem={id}></ButtonUpdateAndRemove>
          ) : (
            <ButtonAddCartAndBuy
              onHandleAddCart={handleAddCart}
              onHandleBuy={handleBuy}
            ></ButtonAddCartAndBuy>
          )}
        </div>
      </div>
      {showNotiUserLogin && (
        <ShowNotification>
          <ToastWatchUser onCancleNotify={handleCancleNotify}></ToastWatchUser>
        </ShowNotification>
      )}
      {showAddCart && (
        <ShowNotification>
          <Toast
            text="Thêm vào giỏ hàng thành công"
            typeToast="success"
            IconToast={AiFillCheckCircle}
          ></Toast>
        </ShowNotification>
      )}
    </div>
  );
}

export default ProductInfoBasicAndPrice;
