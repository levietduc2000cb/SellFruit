const listInputRegister = [
  {
    title: "Nhập họ",
    inputName: "lastName",
    typeInput: "text",
    value: "",
    validate: {
      length: 3,
      characters: null,
    },
    messageValidate: "",
  },
  {
    title: "Nhập tên",
    inputName: "firstName",
    typeInput: "text",
    value: "",
    validate: {
      length: 3,
      characters: null,
    },
    messageValidate: "",
  },
  {
    title: "Nhập tên tài khoản",
    inputName: "account",
    typeInput: "text",
    value: "",
    validate: {
      length: 3,
      characters: null,
    },
    messageValidate: "",
  },
  {
    title: "Nhập mật khẩu",
    inputName: "password",
    typeInput: "password",
    value: "",
    validate: {
      length: 3,
      characters: null,
    },
    messageValidate: "",
  },

  {
    title: "Nhập số điện thoại",
    inputName: "phoneNumber",
    typeInput: "tel",
    value: "",
    validate: {
      length: 3,
      characters: null,
    },
    messageValidate: "",
  },
  {
    title: "Nhập địa chỉ email",
    inputName: "emailAddress",
    typeInput: "email",
    value: "",
    validate: {
      length: null,
      characters: null,
    },
    messageValidate: "",
  },
  {
    title: "Nhập địa chỉ nhà riêng hoặc công ty",
    inputName: "address",
    typeInput: "text",
    value: "",
    validate: {
      length: null,
      characters: null,
    },
    messageValidate: "",
  },
];

export default listInputRegister;
