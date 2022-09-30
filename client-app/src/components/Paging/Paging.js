//Phân trang cho cho trang web
import styles from "./Paging.module.css";
import classNames from "classnames/bind";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

function Paging({ numberTotalPage, onHandleNumberPage, numberPage }) {
  numberPage = Number(numberPage);
  let cx = classNames.bind(styles);
  const handleSelectPage = (e) => {
    onHandleNumberPage(e.target.value);
  };

  return (
    <ul className={cx("paging")}>
      <li className={cx("number_page")} value={0} onClick={handleSelectPage}>
        <BiChevronsLeft></BiChevronsLeft>First
      </li>
      {numberTotalPage > 0 && (
        <ul className={cx("number_page_wrapper")}>
          <li
            className={cx("number_page", "active")}
            value={numberPage}
            onClick={handleSelectPage}
          >
            {numberPage}
          </li>
          {numberPage === numberTotalPage ? null : (
            <li
              className={cx("number_page")}
              value={numberPage + 1}
              onClick={handleSelectPage}
            >
              {numberPage + 1}
            </li>
          )}
        </ul>
      )}
      {numberTotalPage === 0 && (
        <ul className={cx("number_page_wrapper")}>
          <li
            className={cx("number_page", "active")}
            value={numberPage}
            onClick={handleSelectPage}
          >
            {numberPage}
          </li>
        </ul>
      )}
      {numberTotalPage > 1 && numberPage < numberTotalPage ? (
        <li className={cx("number_page", "number_page_disable")}>...</li>
      ) : null}
      <li
        className={cx("number_page")}
        value={numberTotalPage}
        onClick={handleSelectPage}
      >
        Last
        <BiChevronsRight></BiChevronsRight>
      </li>
    </ul>
  );
}

export default Paging;
