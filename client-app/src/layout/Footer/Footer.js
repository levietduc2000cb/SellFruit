import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "~/asset/image/logo-hoa-qua.png";
import { PathRoutes } from "~/routes/PathRoutes";
import axiosInstance from "~/axios/axiosConfig";

function Footer() {
  let cx = classNames.bind(styles);

  const [news, setNews] = useState(null);
  const { pathname } = useLocation();

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
    <footer>
      <div className={cx("footer")}>
        <div className={cx("footer_wrapper")}>
          <div className={cx("footer_content")}>
            <div className={cx("footer_content_section")}>
              <img src={logo} alt="logo_hoa_qua"></img>
              <h1
                className={cx(
                  "footer_content_section_title",
                  "margin-top-bottom_14px"
                )}
              >
                Về chúng tôi
              </h1>
              <p className={cx("footer_content_section_des")}>
                Chuyên cung cấp các loại hoa quả nhập khẩu, nội địa và các loại
                thực phẩm từ thiên nhiên.
              </p>
            </div>
            <div className={cx("footer_content_section")}>
              <h1 className={cx("footer_content_section_title")}>Liên hệ</h1>
              <ul className={cx("footer_content_section_list-info")}>
                <li className={cx("footer_content_section_list-info_text")}>
                  <AiFillHome className={cx("footer_content_section_icon")} />
                  <p>335 Cầu Giấy, Hà Nội</p>
                </li>
                <li className={cx("footer_content_section_list-info_text")}>
                  <BsFillTelephoneFill
                    className={cx("footer_content_section_icon")}
                  />
                  <p>0986.989.626 - 0986.989.626</p>
                </li>
                <li className={cx("footer_content_section_list-info_text")}>
                  <AiOutlineMail
                    className={cx("footer_content_section_icon")}
                  />
                  <p>topweb.com.vn@gmail.com</p>
                </li>
                <li className={cx("footer_content_section_list-info_text")}>
                  <FaFacebookF className={cx("footer_content_section_icon")} />
                  <p>fb.com/topweb.com.vn</p>
                </li>
              </ul>
            </div>
            <div className={cx("footer_content_section")}>
              <h1 className={cx("footer_content_section_title")}>Tin tức</h1>
              <ul className={cx("footer_content_section_list-info")}>
                {news &&
                  news.map((newFooter, index) => {
                    return (
                      <Link
                        key={index}
                        to={`${PathRoutes.news}/${newFooter._id}`}
                        className={cx(
                          "footer_content_section_list-info_text",
                          "footer_content_section_news"
                        )}
                      >
                        <p>{newFooter.title}</p>
                      </Link>
                    );
                  })}
              </ul>
            </div>
            <div className={cx("footer_content_section")}>
              <h1 className={cx("footer_content_section_title")}>
                Về chúng tôi
              </h1>
              <ul className={cx("footer_content_section_list-info")}>
                <li className={cx("footer_content_section_list-info_text")}>
                  {pathname === "/introduce" ? (
                    <a href="#information">Thông tin</a>
                  ) : (
                    <p>Thông tin</p>
                  )}
                </li>
                <li className={cx("footer_content_section_list-info_text")}>
                  {pathname === "/introduce" ? (
                    <a href="#source">Nguồn gốc</a>
                  ) : (
                    <p>Nguồn gốc</p>
                  )}
                </li>
                <li className={cx("footer_content_section_list-info_text")}>
                  {pathname === "/introduce" ? (
                    <a href="#field_of_activity">Lĩnh vực hoạt động</a>
                  ) : (
                    <p>Lĩnh vực hoạt động</p>
                  )}
                </li>
                <li className={cx("footer_content_section_list-info_text")}>
                  {pathname === "/introduce" ? (
                    <a href="#policy">Chính sách chất lượng</a>
                  ) : (
                    <p>Chính sách chất lượng</p>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer_copy")}>
        <div className={cx("footer_copy_content")}>
          Copyright 2022 bởi <span>Le Viet Duc</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
