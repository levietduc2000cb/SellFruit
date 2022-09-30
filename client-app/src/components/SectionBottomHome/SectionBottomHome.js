/* eslint-disable jsx-a11y/iframe-has-title */
import styles from "./SectionBottomHome.module.css";
import classNames from "classnames/bind";
import PostNew from "~/components/PostNew";
import FormContact from "../FormContact";
import axiosInstance from "~/axios/axiosConfig";
import { useEffect, useState } from "react";
import YoutubeEmbed from "~/components/YoutubeEmbed";

function SectionBottomHome() {
  let cx = classNames.bind(styles);

  const [postNews, setPostNews] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axiosInstance.get("news/getnews");
        if (res.data) {
          setPostNews([...res.data.news]);
        }
      } catch (error) {
        throw new Error("Something went wrong");
      }
    }
    fetch();
  }, []);

  return (
    <div className={cx("section-bottom-home")}>
      <div className={cx("section-bottom-home_wrapper")}>
        <div className={cx("section-bottom-home_news")}>
          <div className={cx("section-bottom-home_news_title_wrapper")}>
            <h1 className={cx("section-bottom-home_news_title")}>Tin tức</h1>
          </div>
          <div className={cx("section-bottom-home_news_wrapper")}>
            {postNews ? (
              postNews.map((postNew) => {
                return (
                  <PostNew
                    key={postNew._id}
                    id={postNew._id}
                    title={postNew.title}
                    postImg={postNew.imageTitle}
                    dateCreate={postNew.dateCreate}
                  ></PostNew>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className={cx("section-bottom-home_contact")}>
          <div className={cx("section-bottom-home_contact_wrapper")}>
            <FormContact></FormContact>
          </div>
          <YoutubeEmbed embedId="i493IC18WvY"></YoutubeEmbed>
        </div>
      </div>
    </div>
  );
}

export default SectionBottomHome;
