import styles from "./New.module.css";
import classNames from "classnames/bind";

import PostNew from "~/components/PostNew";
import SideBarNews from "~/components/SideBarNews";

import axiosInstance from "~/axios/axiosConfig";

import { useEffect, useState } from "react";

function News() {
  let cx = classNames.bind(styles);

  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axiosInstance.get("news/getnews");
        if (res.data) {
          setNews([...res.data.news]);
        }
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
    fetch();
  }, []);

  console.log(news);

  return (
    <div className={cx("news_page")}>
      <div className={cx("news_page_wrapper")}>
        <div className={cx("news_page_top")}>
          <h2 className={cx("news_page_top_title")}>Tin tức</h2>
          <div className={cx("newspage_top_content")}>
            Vào tháng 03 hàng năm tại các khu vực miền tây và miền bắc nước ta
            là thời điểm những trang trại nhãn bắt đầu nở hoa đây cũng là thời
            điềm những nhà nuôi ong ở các nơi sẽ tiến hành di chuyển đàn ong đến
            thu hoạch mật ong hoa nhãn. Các chú ong khi được đưa đến đây sẽ làm
            việc chăm chỉ ngày đêm. Ban ngày đi hút mật đưa về tổ, ban đêm tiến
            hành luyện mật qua một quá trình dài. Khi mật đủ chín, chủ trại nuôi
            ong của Hilobee mới tiến hành quay lấy mật. Đặc thù hoa nhãn có
            hương vị rất đặc trưng và dễ nhận biết.
          </div>
        </div>
        <div className={cx("news_page_bottom")}>
          <div className={cx("news_page_bottom_post-new")}>
            {news &&
              news.map((newPost, index) => {
                return (
                  <div key={index}>
                    <PostNew
                      id={newPost._id}
                      title={newPost.title}
                      postImg={newPost.imageTitle}
                      dateCreate={newPost.dateCreate}
                      timeText
                    ></PostNew>
                  </div>
                );
              })}
          </div>
          <SideBarNews></SideBarNews>
        </div>
      </div>
    </div>
  );
}

export default News;
