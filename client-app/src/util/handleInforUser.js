export function saveInforUser(user) {
  localStorage.setItem(process.env.REACT_APP_INFOR_USER, JSON.stringify(user));
}

export function getInforUser() {
  const user = localStorage.getItem(process.env.REACT_APP_INFOR_USER);
  const dataUser = JSON.parse(user);
  return dataUser;
}

export function removeUser() {
  localStorage.removeItem(process.env.REACT_APP_INFOR_USER);
}
