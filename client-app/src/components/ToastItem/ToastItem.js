import styles from "./ToastItem.module.css";
import classNames from "classnames/bind";
import { BsEmojiSmile } from "react-icons/bs";
import { RiEmotionSadLine } from "react-icons/ri";

function ToastWatchUser({ message, typeNotify, onHandleMovePage }) {
  let cx = classNames.bind(styles);

  const onhandleCancel = () => {};

  return (
    <div className={cx("toast_watch_item")}>
      <div>
        {typeNotify === "success" ? (
          <BsEmojiSmile className={cx("icon_success")}></BsEmojiSmile>
        ) : (
          <RiEmotionSadLine className={cx("icon_error")}></RiEmotionSadLine>
        )}
      </div>
      <div className={cx("toast_watch_item_text")}>{message}</div>
      {typeNotify === "success" ? (
        <div className={cx("toast_watch_item_text_btn_choose")}>
          <button onClick={onHandleMovePage} className={cx("success")}>
            Đồng ý
          </button>
        </div>
      ) : (
        <div className={cx("toast_watch_item_text_btn_choose")}>
          <button onClick={onhandleCancel} className={cx("error")}>
            Đồng ý
          </button>
        </div>
      )}
    </div>
  );
}

export default ToastWatchUser;
