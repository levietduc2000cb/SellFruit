import styles from "./FormItem.module.css";
import classNames from "classnames/bind";

import InputForm from "~/components/InputForm";
import { PathRoutes } from "~/routes/PathRoutes";
import { Link } from "react-router-dom";

function FormItem({
  title,
  handleSubmitItem,
  item,
  handleInput,
  handleSelectType,
  handleInputDescribe,
  setFileItem,
  btn,
}) {
  let cx = classNames.bind(styles);

  return (
    <form onSubmit={handleSubmitItem}>
      <h1 className={cx("title_create_item")}>{title}</h1>
      <div className={cx("section_create_item")}>
        <InputForm
          title="Nhập tên sản phẩm"
          inputName="name"
          typeInput="text"
          valueInput={item.name}
          onHandleInput={handleInput}
        ></InputForm>
        <InputForm
          title="Nhập giá sản phẩm"
          inputName="price"
          typeInput="number"
          valueInput={item.price}
          onHandleInput={handleInput}
        ></InputForm>
        <InputForm
          title="Nhập nguồn gốc sản phẩm"
          inputName="origin"
          typeInput="text"
          valueInput={item.origin}
          onHandleInput={handleInput}
        ></InputForm>
        <InputForm
          title="Nhập phần trăm giảm giá"
          inputName="sale"
          typeInput="number"
          valueInput={item.sale}
          onHandleInput={handleInput}
        ></InputForm>
        <InputForm
          title="Nhập phương thức bảo quản sản phẩm(có thể là bảo quả lạnh hoặc nóng...)"
          inputName="preserve"
          typeInput="text"
          valueInput={item.preserve}
          onHandleInput={handleInput}
        ></InputForm>
        <InputForm
          title="Nhập giá trị dinh dưỡng"
          inputName="nutritionalValue"
          typeInput="text"
          valueInput={item.nutritionalValue}
          onHandleInput={handleInput}
        ></InputForm>
      </div>
      <div className={cx("type_item_wrapper")}>
        <label htmlFor="type" className={cx("title_type_item")}>
          Phân loại sản phẩm
        </label>
        <select
          className={cx("type_item")}
          name="type"
          id="type"
          value={item.type}
          onChange={handleSelectType}
        >
          <option value="Trái cây nội địa">Trái Cây Nội Địa</option>
          <option value="Trái cây nhập khẩu">Trái Cây Nhập Khẩu</option>
          <option value="Hạt dinh dưỡng">Hạt Dinh Dưỡng</option>
          <option value="Nước ép">Nước Ép</option>
          <option value="Rau củ quả">Rau Củ Quả</option>
          <option value="Sản phẩm khác">Sản Phẩm Khác</option>
        </select>
      </div>
      <div className={cx("input_describe")}>
        <div>
          <label htmlFor="describe">Nhập mô tả về sản phẩm</label>
        </div>
        <textarea
          id="describe"
          name="describe"
          rows="10"
          placeholder="Nhập mô tả về sản phẩm"
          value={item.describe}
          onChange={handleInputDescribe}
          required
        ></textarea>
      </div>
      <div className={cx("image_item_upload")}>
        <label htmlFor="imageItem">
          <img
            src={item.img}
            alt="image_item"
            className={cx("image_upload")}
          ></img>
        </label>
        <input
          id="imageItem"
          type="file"
          name="imageItem"
          onChange={setFileItem}
          hidden
        ></input>
      </div>
      <div className={cx("btn_wrapper")}>
        <button type="submit" className={cx("btn_create_new_item")}>
          {btn}
        </button>
        <Link to={PathRoutes.profile} className={cx("btn_cancel")}>
          Hủy
        </Link>
      </div>
    </form>
  );
}

export default FormItem;
