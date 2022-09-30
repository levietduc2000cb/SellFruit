import styles from "./Post.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function Post({ id, imgLink, name }) {
  let cx = classNames.bind(styles);
  return (
    <Link to={`${PathRoutes.news}/${id}`} className={cx("introduce_post")}>
      <div className={cx("introduce_post_img_wrapper")}>
        <img src={imgLink} alt="img_post" className={cx("img_post")}></img>
      </div>
      <div className={cx("introduce_post_name")}>{name}</div>
    </Link>
  );
}

export default Post;
