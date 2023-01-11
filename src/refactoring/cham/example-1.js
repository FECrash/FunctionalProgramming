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

// 결국 카트 안에 어떤 아아템의 값을 변경 후 새 카트를 반환하는 것이다
// 그러므로 결과는 사용하는 곳에서 이렇게 보이게하는게 목적
// ex)
// updateItemInCart('price', 10000);
// updateItemInCart('shipping', true);
// updateItemInCart('quantity', 12);
// updateItemInCart('tax', 1000);

const updateItemInCart = (cart, name, key, value) => {
  const item = cart[name];
  const newItem = objectSet(item, key, value);
  return objectSet(cart, name, newItem);
};

// 사용부에서는 적게는 cart, 크게는 name, key까지 partial 해서 쓸 수 있게끔
