//Xử lý chia số thành giá trị có dấu chấm
function handleNumberPrice(number) {
  let getPrice = Number(number);
  let price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(getPrice);
  const result = price.slice(0, price.length - 2);
  return result;
}
export default handleNumberPrice;
