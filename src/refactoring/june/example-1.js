// 1. setPriceByName, setShippingByName, setQuantityByName, setTaxByName에 고정 string으로 들어가는 key가 존재 (암묵적 입력)
// 2. 이렇게 되면 item에 새로운 필드가 추가될때마다 함수를 새로 만들어야 하는 상황

function setPriceByName(cart, name, price) {
  var item = cart[name];
  var newItem = objectSet(item, 'price', price);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart, name, ship) {
  var item = cart[name];
  var newItem = objectSet(item, 'shipping', ship);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setQuantityByName(cart, name, quant) {
  var item = cart[name];
  var newItem = objectSet(item, 'quantity', quant);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart, name, tax) {
  var item = cart[name];
  var newItem = objectSet(item, 'tax', tax);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

// result
const itemKeyArr = ['price', 'shipping', 'quantity', 'tax'];
const setValueByKey = (cart, name, key, value) => {
  if (!itemKeyArr.includes(key)) throw '아이템에 존재하지 않는 키값입니다!';
  const item = cart[name];
  const newItem = objectSet(item, key, value);
  const newCart = objectSet(cart, name, newItem);
  return newCart;
};
