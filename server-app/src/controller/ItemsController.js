const fruitItems = require("../Schema/Item");
const { uploadToCloudinary } = require("../cloudinary/uploadToCloudinary");

function setPathImage(type) {
  switch (type) {
    case "Trái cây nhập khẩu":
      return "QuaNhapKhau";
    case "Trái cây nội địa":
      return "QuaNoiDia";
    case "Nước ép":
      return "NuocEp";
    case "Hạt dinh dưỡng":
      return "HatDInhDuong";
      break;
    case "Rau củ quả":
      return "RauCuQuaOrganic";
    default:
      return "SanPhamKhac";
  }
}

//Lấy tất cả sản phẩm
exports.getItems = async (req, res, next) => {
  try {
    const items = await fruitItems.find({}).limit(6);
    if (items) {
      res.status(200).json(items);
    }
  } catch (error) {
    res.status(404);
  }
};

//Lấy chi tiết sản phẩm
exports.getDetailItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await fruitItems.findById(id);
    if (item) {
      res.status(200).json(item);
    }
  } catch (error) {
    res.status(404);
  }
};

//Tìm kiếm trong trang web
exports.getNameItems = async (req, res, next) => {
  const { search, numberPage } = req.query;
  const patternSearch = new RegExp(`${search}`, "i");

  try {
    let numberTotalPage = -1;
    const countNumber = await fruitItems.find({ name: patternSearch }).count();
    if (countNumber) {
      numberTotalPage = Math.floor(countNumber / 8);
    }
    const item = await fruitItems
      .find({ name: patternSearch })
      .skip(8 * numberPage)
      .limit(8);
    if (item) {
      res.status(200).json({ numberTotalPage, item: [...item] });
    }
  } catch (error) {
    res.status(404).json({ message: "Có lỗi trong quá trình tìm kiếm" });
  }
};

//Tìm theo thể loại có phân trang
exports.getNamebyType = async (req, res, next) => {
  const { type, nameSort, typeSort, numberPage } = req.query;
  let skipItems = numberPage * 8;
  //type là loại sản phẩm,
  //nameSort là tên sản phẩm sắp xếp, ví dụ sắp xếp theo thời gian, giá,...
  //typeSort là sắp xếp theo gì, ví dụ: từ cao xuống thấp hoặc từ thấp lên cao
  //numberPage là số trang mà người dùng đang ở
  //1 giá từ thấp đến cao
  //-1 giá từ cao xuống thấp
  try {
    let numberTotalPage = -1;
    if (type === "all") {
      const countNumber = await fruitItems.find({}).count();
      if (countNumber) {
        numberTotalPage = Math.floor(countNumber / 8);
      }
      const item = await fruitItems
        .find({})
        .skip(skipItems)
        .limit(8)
        .sort({ [nameSort]: typeSort });
      if (item) {
        res
          .status(200)
          .json({ numberTotalPage: numberTotalPage, item: [...item] });
      }
    } else {
      const countNumber = await fruitItems.find({ type: type }).count();
      if (countNumber) {
        numberTotalPage = Math.floor(countNumber / 8);
      }
      const item = await fruitItems
        .find({ type: type })
        .skip(skipItems)
        .limit(8)
        .sort({ [nameSort]: typeSort });
      if (item) {
        res
          .status(200)
          .json({ numberTotalPage: numberTotalPage, item: [...item] });
      }
    }
  } catch (error) {
    res.status(404).json({ message: "Có lỗi trong quá trình tìm kiếm" });
  }
};

//Tìm các sản phẩm tương tự
exports.getSimilarItems = async (req, res) => {
  const { typeItem, idItemCurren } = req.query;
  try {
    const items = await fruitItems
      .find({ type: typeItem, _id: { $ne: idItemCurren } })
      .limit(4);
    if (items) {
      res.status(200).json(items);
    }
  } catch (error) {
    res.status(404).json({ message: "Lỗi server" });
  }
};

//Tạo sản phẩm mới chỉ dành cho Admin được tạo
exports.createItem = async (req, res) => {
  const {
    name,
    price,
    sale,
    img,
    origin,
    preserve,
    nutritionalValue,
    describe,
    type,
  } = req.body;
  let pathImage = setPathImage(type);
  let newImg;
  if (img === "") {
    newImg =
      "https://res.cloudinary.com/dg5r0cyek/image/upload/v1660874136/fruitItem/KhongCoAnh/no_image_available_k26ge0.jpg";
  } else {
    const dataImg = await uploadToCloudinary(img, pathImage);
    newImg = dataImg.url;
  }
  let doc = new fruitItems({
    name,
    price,
    sale,
    realPrice: Number(price) - (Number(price) * Number(sale)) / 100,
    img: newImg,
    origin,
    preserve,
    nutritionalValue,
    describe,
    type,
  });
  try {
    const data = await doc.save();
    if (data) {
      res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failure" });
  }
};

//Chỉnh sửa cho sản phẩm nếu có sai sót
exports.updateItem = async (req, res, next) => {
  console.log(req.body);
  const { _id, img, type, ...rest } = req.body;
  let newImage = img;
  let pathImage = setPathImage(type);
  let docEdit = null;
  try {
    if (img) {
      const imgCreate = await uploadToCloudinary(img, pathImage);
      newImage = imgCreate.url;
      docEdit = await fruitItems.findOneAndUpdate(
        { _id: _id },
        {
          img: newImage,
          type: type,
          ...rest,
        },
        {
          new: true,
        }
      );
    } else {
      docEdit = await fruitItems.findOneAndUpdate(
        { _id: _id },
        {
          type: type,
          ...rest,
        },
        {
          new: true,
        }
      );
    }
    if (docEdit) {
      res.status(200).json({ message: "Sửa sản phẩm thành công" });
    }
  } catch (error) {
    res.status(400).json({ message: "Có lỗi trong quá trình chỉnh sửa" });
  }
};

//Xóa sản phẩm ra khỏi mặt hàng
exports.deleteItem = async (req, res) => {
  const { id } = req.query;
  try {
    const data = await fruitItems.findByIdAndDelete(id);
    if (data) {
      res.status(200).json({ message: "Xóa thành công" });
    }
  } catch (error) {
    res.status(400).json({ message: "Lỗi trong quá trình xóa" });
  }
};
