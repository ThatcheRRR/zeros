module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let countEven = 0,
      countFives = 0;
  let newArr = [], 
      filtArr = [],
      main = [],
      finArr = [];
      fact = [];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 2) {
      main.push(parseInt(arr[i]));
    } else if (arr[i].length > 2) {
      if (~arr[i].indexOf('!!')) {
        newArr.push(parseInt(arr[i]));
      } else {
        main.push(parseInt(arr[i]));
      }
    }
  }
  for (let i = 0; i < main.length; i++) {
    for (let j = 1; j <= main[i]; j++) {
      fact.push(j);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 == 0) {
      for (let j = 0; j <= newArr[i]; j++) {
        if (j % 2 == 0 && j != 0) {
          filtArr.push(j);
        } else continue;
      }
    }
    if (newArr[i] % 2 != 0) {
      for (let j = 0; j <= newArr[i]; j++) {
        if (j % 2 != 0) {
          filtArr.push(j);
        } else continue;
      }
    }
  }
  if (filtArr == []) {
    finArr = fact;
  } else if (fact == []) {
    finArr = filtArr;
  } else {
    finArr = filtArr.concat(fact);
  }
  for (let i = 0; i < finArr.length; i++) {
    while (finArr[i] % 5 == 0) {
      finArr[i] /= 5;
      countFives++;
    }
    while (finArr[i] % 2 == 0) {
      finArr[i] /= 2;
      countEven++;
    }
  }
  if (countFives > countEven) {
    return countEven;
  } else {
    return countFives;
  }
}