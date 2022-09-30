import styles from "./FormContact.module.css";
import classNames from "classnames/bind";

function FormContact() {
  let cx = classNames.bind(styles);
  return (
    <form className={cx("section-bottom-home_contact_container")}>
      <h1 className={cx("section-bottom-home_contact_title")}>
        Liên hệ tư vấn mua hàng
      </h1>
      <input
        type="text"
        name="yourname"
        placeholder="Họ tên của bạn..."
        className={cx("section-bottom-home_contact_input")}
      ></input>
      <input
        type="text"
        name="yourphone"
        placeholder="Số điện thoại..."
        className={cx("section-bottom-home_contact_input")}
      ></input>
      <textarea
        id="yourrequest"
        rows="5"
        name="yourrequest"
        placeholder="Nội dung cần tư vấn..."
        className={cx("section-bottom-home_contact_input")}
      ></textarea>
      <button type="submit" className={cx("section-bottom-home_contact_btn")}>
        Gửi liên hệ
      </button>
    </form>
  );
}

export default FormContact;
