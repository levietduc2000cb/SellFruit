import styles from "./InforUserPay.module.css";
import classNames from "classnames/bind";
import InputForm from "~/components/InputForm";

function InforUserPay({
  useInforPay,
  text,
  onHandleInput,
  onHandleChangeText,
}) {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("infor_user_pay")}>
      <div>
        <h1 className={cx("info_user_pay_title")}>Thông tin thanh toán</h1>
        <div className={cx("info_user_pay_fullname")}>
          <InputForm
            title="Họ"
            inputName="lastName"
            typeInput="text"
            valueInput={useInforPay.lastName}
            onHandleInput={onHandleInput}
          ></InputForm>
          <InputForm
            title="Tên"
            inputName="firstName"
            typeInput="text"
            valueInput={useInforPay.firstName}
            onHandleInput={onHandleInput}
          ></InputForm>
        </div>
        <InputForm
          title="Địa chỉ"
          inputName="address"
          typeInput="text"
          valueInput={useInforPay.address}
          onHandleInput={onHandleInput}
        ></InputForm>
        <InputForm
          title="Số điện thoại"
          inputName="phoneNumber"
          typeInput="text"
          valueInput={useInforPay.phoneNumber}
          onHandleInput={onHandleInput}
        ></InputForm>
        <InputForm
          title="Địa chỉ Email"
          inputName="emailAddress"
          typeInput="email"
          valueInput={useInforPay.emailAddress}
          onHandleInput={onHandleInput}
        ></InputForm>
      </div>
      <div>
        <h1 className={cx("info_user_pay_title")}>Thông tin bổ sung</h1>
        <div className={cx("info_user_pay_additional")}>
          <label htmlFor="note">Ghi chú đơn hàng(tùy chọn)</label>
          <textarea
            id="note"
            name="note"
            rows={10}
            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian nhận hay thêm một số tùy chọn khác"
            defaultValue={text}
            onChange={onHandleChangeText}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default InforUserPay;
