for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

for (var j = 0; j < dishes.length; i++) {
  var dish = dishes[j];
  wash(dish);
  dry(dish);
  putAway(dish);
}

// 음식을 요리해서 먹고 설거지까지 끝내는 동작 같은데 food랑 dish간의 상관관계가 보이지 않음... foods와 dishes가 정비례하는지가 궁금하다
const doTodosForList = (list, ...todos) => {
  for (let i = 0; i < list.length; i++) {
    var item = list[i];

    for (let j = 0; j < todos.length; i++) {
      todos[j](item);
    }
  }
};

// 사용하면
/*
  doTodosForList(foods, cook, eat);
  doTodosForList(dishes, wash, dry, putAway);
 */
