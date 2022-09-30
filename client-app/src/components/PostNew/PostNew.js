import styles from "./PostNew.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";

function PostNew({ id, title, postImg, dateCreate, timeText }) {
  let cx = classNames.bind(styles);

  const date = new Date(dateCreate);

  let cutDate = date.toLocaleDateString().split("/");

  return (
    <Link
      to={`${PathRoutes.news}/${id}`}
      className={cx("post_news_content_news_content")}
    >
      <div className={cx("post_news_content_news_content_img_wrapper")}>
        <img
          src={postImg}
          alt="blog-img"
          className={cx("post_news_content_news_content_img")}
        ></img>
      </div>
      <div className={cx("post_news_content_news_content_detail_wrapper")}>
        <div className={cx("post_news_content_news_content_title")}>
          {title}
        </div>
        <div className={cx("post_news_content_news_content_time")}>
          {date.toLocaleDateString()}
        </div>
        <div className={cx("post_news_content_news_content_des")}>
          Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia
          đình trong thành phố bởi phương pháp trồng rau đơn giản, dễ trồng, dễ
          quản lý, an toàn và tiện lợi. Nhưng người trồng cũng
        </div>
      </div>
      {timeText && (
        <div className={cx("post_news_content_news_content_time_text")}>
          <span className={cx("post_news_content_news_content_time_text_day")}>
            {cutDate[0]}
          </span>
          <span
            className={cx("post_news_content_news_content_time_text_month")}
          >
            th{Number(cutDate[1])}
          </span>
        </div>
      )}
    </Link>
  );
}

export default PostNew;
