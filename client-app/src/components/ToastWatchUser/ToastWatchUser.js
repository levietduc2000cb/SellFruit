import styles from "./ToastWatchUser.module.css";
import classNames from "classnames/bind";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function ToastWatchUser({ onCancleNotify }) {
  let cx = classNames.bind(styles);

  const navigate = useNavigate();

  return (
    <div className={cx("toast_watch_user")}>
      <div>
        <BsEmojiSmile className={cx("icon_laughing")}></BsEmojiSmile>
      </div>
      <div className={cx("toast_watch_user_text")}>
        Bạn cần đăng nhập để sử dụng chức năng này
      </div>
      <div className={cx("toast_watch_user_btn_choose")}>
        <button onClick={onCancleNotify}>Hủy</button>
        <button
          onClick={() => {
            navigate(PathRoutes.login);
          }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default ToastWatchUser;
