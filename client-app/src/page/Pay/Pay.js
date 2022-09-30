import styles from "./Pay.module.css";
import classNames from "classnames/bind";
import InforUserPay from "~/components/InforUserPay";
import InforUserOrder from "~/components/InforUserOrder";
import { useSelector, useDispatch } from "react-redux";
import { removeAllItem } from "~/redux/reduxSlices/cartItemSlice";
import { useEffect, useMemo, useState } from "react";
import axiosInstance from "~/axios/axiosConfig";
import { PathRoutes } from "~/routes/PathRoutes";
import { useNavigate } from "react-router-dom";

function Pay() {
  let cx = classNames.bind(styles);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Thông tin user
  const { userInfo } = useSelector((state) => state.auth);
  const [useInforPay, setUserInforPay] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
  });

  const [selectMethodPay, setSelectMethodPay] = useState("payment_on_delivery");

  useEffect(() => {
    setUserInforPay({ ...userInfo });
  }, [userInfo]);
  //Các sản phẩm trong giỏ hàng
  const { cartItems } = useSelector((state) => state.cartItem);

  //Tổng phí phụ
  let extraFee = cartItems.length > 0 ? 30000 : 0;

  const totalPrice = useMemo(() => {
    const total = cartItems.reduce((total, valueCurren) => {
      return total + valueCurren.amountItem * valueCurren.realPrice;
    }, 0);
    return total + extraFee;
  }, [cartItems, extraFee]);

  //Thông tin bổ sung
  const [text, setText] = useState("");

  //Xử lý thay đổi thông tin người mua trong đơn hàng
  const handleInput = (e, keyName, inputIndex) => {
    setUserInforPay((preUserInfor) => {
      return { ...preUserInfor, [keyName]: e.target.value };
    });
  };

  //Xử lý text
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  //Xử lý lựa chọn phương thức thanh toàn
  const handleSelectMethod = (option) => {
    setSelectMethodPay(option);
  };

  const handleOrder = async () => {
    const res = await axiosInstance.post("orders/addorders", {
      userInforId: useInforPay.id,
      userInfor: { ...useInforPay },
      items: [...cartItems],
      totalPrice: totalPrice,
      methodPay: selectMethodPay,
      message: text,
    });
    if (res.data) {
      dispatch(removeAllItem());
      navigate(PathRoutes.profile);
    }
  };

  return (
    <div className={cx("pay_page")}>
      <div className={cx("pay_wrapper")}>
        <InforUserPay
          useInforPay={useInforPay}
          onHandleInput={handleInput}
          text={text}
          onHandleChangeText={handleChangeText}
        ></InforUserPay>
        <InforUserOrder
          cartItems={cartItems}
          totalPrice={totalPrice}
          selectMethodPay={selectMethodPay}
          onHandleSelectMethod={handleSelectMethod}
          onHandleOrder={handleOrder}
          extraFee={extraFee}
        ></InforUserOrder>
      </div>
    </div>
  );
}

export default Pay;
