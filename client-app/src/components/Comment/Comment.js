import styles from "./Comment.module.css";
import classNames from "classnames/bind";
import Image from "~/components/Image";

function Comment({ name, textComment, linkImage }) {
  let cx = classNames.bind(styles);

  return (
    <div className={cx("comment")}>
      <div className={cx("image_avatar_wrapper")}>
        <Image linkImage={linkImage} AltImage="avatarComment"></Image>
      </div>
      <div className={cx("infor_user_comment")}>
        <div className={cx("user_name_comment")}>{name}</div>
        <div className={cx("text_comment")}>{textComment}</div>
      </div>
    </div>
  );
}

export default Comment;
