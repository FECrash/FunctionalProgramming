// 1. loop가 중복해서 쓰이고 있다.
// 2. cook, eat, wash, dry, putAway등 데이터를 이용해 할 일에 집중할 수 있는 코드를 만들자

const foods = ['pizza', 'chungkukzang', 'ramen'];
const dishes = ['main', 'size', 'personal'];

for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

for (var j = 0; j < dishes.length; j++) {
  var dish = dishes[j];
  wash(dish);
  dry(dish);
  putAway(dish);
}

const forEach = (arr, callback) => {
  if (!('length' in arr)) throw '배열이 아님!';
  let index = 0;
  while (index < arr.length) {
    const current = arr[index];
    callback(current, index, arr);
    index += 1;
  }
};

forEach(foods, food => {
  cook(food);
  eat(food);
});
forEach(dishes, dish => {
  wash(dish);
  dry(dish);
  putAway(dish);
});
