import styles from "./ShowNotification.module.css";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { resetMessage } from "~/redux/reduxSlices/authSlice";
import { useEffect } from "react";

function ShowNotification({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeHiden = setTimeout(() => {
      dispatch(resetMessage());
    }, 1900);
    return () => {
      clearTimeout(timeHiden);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cx = classNames.bind(styles);
  return <div className={cx("show_notifycation")}>{children}</div>;
}

export default ShowNotification;
