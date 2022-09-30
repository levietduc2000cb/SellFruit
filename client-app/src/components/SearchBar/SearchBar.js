import styles from "./SearchBar.module.css";
import classNames from "classnames/bind";
import { FaSearch } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "~/routes/PathRoutes";
import axiosInstance from "~/axios/axiosConfig";

function SearchBar() {
  let cx = classNames.bind(styles);

  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState("");
  const [listSearch, setListSearch] = useState(null);

  const timeOut = useRef();

  const fetch = async (inputSearch) => {
    try {
      const res = await axiosInstance(
        `/fruitItems/getNameItems?search=${inputSearch}&numberPage=${0}`
      );
      if (res.data) {
        setListSearch([...res.data.item]);
      }
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  const handleSearchList = (inputSearch) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    if (inputSearch) {
      timeOut.current = setTimeout(() => {
        fetch(inputSearch);
      }, 500);
    } else {
      setListSearch(null);
    }
  };

  const handleCLickSearch = () => {
    if (inputSearch === "") {
      return;
    } else {
      setListSearch(null);
      let paramRoute = `${inputSearch}/${0}`;
      navigate(`${PathRoutes.search}/${paramRoute}`);
    }
  };

  const handleSelectSearch = (inputValue) => {
    if (inputValue === "") {
      return;
    } else {
      setInputSearch(inputValue);
      setListSearch(null);
      let paramRoute = `${inputValue}/${0}`;
      navigate(`${PathRoutes.search}/${paramRoute}`);
    }
  };

  const handleInput = (e) => {
    handleSearchList(e.target.value);
    setInputSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCLickSearch();
    }
  };

  return (
    <div className={cx("nav_bar_container_search")}>
      <div className={cx("search_input_wrapper")}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Tìm kiếm..."
          className={cx("nav_bar_container_search_input")}
          value={inputSearch}
          onKeyDown={handleKeyDown}
          onChange={handleInput}
          autoComplete="off"
        ></input>
        {listSearch && (
          <div className={cx("list_search")}>
            {listSearch.map((item) => {
              return (
                <div
                  key={item._id}
                  className={cx("item_search")}
                  onClick={(e) => {
                    handleSelectSearch(e.target.innerText);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div
        className={cx("nav_bar_container_icon-search")}
        onClick={handleCLickSearch}
      >
        <FaSearch className={cx("nav_bar_icon-search")} />
      </div>
    </div>
  );
}

export default SearchBar;
