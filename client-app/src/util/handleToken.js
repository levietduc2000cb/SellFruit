export function saveToken(token) {
  localStorage.setItem(process.env.REACT_APP_TOKEN, token);
}
export function getToken() {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN);
  return token;
}
export function removeToken() {
  localStorage.removeItem(process.env.REACT_APP_TOKEN);
}
