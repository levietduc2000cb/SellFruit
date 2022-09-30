import styles from "./SideBarNews.module.css";
import classNames from "classnames/bind";
import imgIntroduce from "~/asset/image/introduce_hoa_qua_img.jpg";
import Post from "~/components/Post";
import { useState, useEffect } from "react";
import axiosInstance from "~/axios/axiosConfig";

function SideBarNews() {
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

  return (
    <div className={cx("introduce_section_2")}>
      <div className={cx("introduce_img")}>
        <img
          src={imgIntroduce}
          alt="img_introduce"
          className={cx("img_introduce")}
        ></img>
      </div>
      <div className={cx("introduce_posts")}>
        <div className={cx("introduce_post_title")}>BÀI VIẾT - KINH NGHIỆM</div>
        {news &&
          news.map((newPost, index) => {
            return (
              <Post
                key={index}
                id={newPost._id}
                imgLink={newPost.imageTitle}
                name={newPost.title}
              ></Post>
            );
          })}
      </div>
    </div>
  );
}

export default SideBarNews;
