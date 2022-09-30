import styles from "./IconContact.module.css";
import classNames from "classnames/bind";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

function IconContact({ icon, nameIcon, linkPage }) {
  let cx = classNames.bind(styles);
  let Icon = icon;
  const handleMessageIcon = () => {
    if (nameIcon === "Phone") {
      return "Call us";
    } else if (nameIcon === "Mail") {
      return "Send us an email";
    } else {
      return `Follow on ${nameIcon}`;
    }
  };

  return (
    <a
      href={linkPage}
      target="_blank"
      rel="noopener noreferrer"
      className={cx("icon_contact_space")}
    >
      <Tippy content={handleMessageIcon()}>
        <div className={cx("icon_contact_wrapper", nameIcon)}>
          <Icon className={cx("icon_contact")}></Icon>
        </div>
      </Tippy>
    </a>
  );
}

export default IconContact;
