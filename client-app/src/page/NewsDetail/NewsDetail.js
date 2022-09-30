import styles from "./NewsDetail.module.css";
import classNames from "classnames/bind";
import SideBarNews from "~/components/SideBarNews";
import axiosInstance from "~/axios/axiosConfig";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function NewsDetail() {
  let cx = classNames.bind(styles);

  const params = useParams();

  const [news, setNews] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
    async function fetch(idNew) {
      try {
        const res = await axiosInstance.get(`news/newsDetail?id=${idNew}`);
        if (res.data) {
          setNews(res.data.news);
        }
      } catch (error) {}
    }
    fetch(params.newId);
  }, [params.newId]);
  return (
    <>
      {news ? (
        <div className={cx("news_detail_page")}>
          <div
            style={{ backgroundImage: `url(${news.imageTitle})` }}
            className={cx("news_detail_title")}
          >
            <div className={cx("news_detail_over-lay")}>
              <p className={cx("news_detail_text")}>Tin tức</p>
              <h1 className={cx("news_detail_text_title")}>{news.title}</h1>
              <div className={cx("news_detail_text_title_underline")}></div>
              <div className={cx("news_detail_time_create")}>
                {`POSTED ON ${new Date(news.dateCreate).toDateString()}`}
              </div>
            </div>
          </div>
          <div className={cx("news_detail_page_container")}>
            <div className={cx("news_detail_page_content")}>
              <div className={cx("news_detail_page_title_content")}>
                {news.titleContent}
              </div>
              <div className={cx("news_detail_page_main_content")}>
                {news.content}
              </div>
            </div>
            <div>
              <SideBarNews></SideBarNews>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default NewsDetail;
