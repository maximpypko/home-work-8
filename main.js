var object = {
  'Ivan': {
    age: 18,
    adress: 'Pushkina str. 18'
  },
  'Olga': {
    age: 23,
    adress: 'Efimova str. 10'
  },
  'Oleg': {
    age: 30,
    adress: 'Filatova str. 40'
  },
}


//============== 1 ============//
function getValue(obj) {
  var arrGetValue = [];

  for (var key in obj) {
    arrGetValue.push(obj[key]);
  }

  return arrGetValue;
}
console.log(getValue(object));


//============== 2 ============//
function getKeys(obj) {
  var arrGetKeys = [];
  
  for (var key in obj) {
    arrGetKeys.push(key);
  }

  return arrGetKeys;
} 
console.log(getKeys(object));


//============== 3 ============//
function getEntries(obj) {
  var arrGetEntries = [];

  for (var key in obj) {
    arrGetEntries.push([key, obj[key]]);
  }
  return arrGetEntries;
}

console.log(getEntries(object));