"use strict";

/* Task 1: Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число */
const arr1 = [4, -2, 5, 19, -130, 0, 10];
function minMaxValue(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  console.log(`Min: ${min}, Max: ${max}`);
}

minMaxValue(arr1);

/* Task 2: Дан массив arr. Найдите среднее арифметическое его элементов.
 Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/

const arr = [12, 15, 20, 25, 59, 79];
function avgValue(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Avg value: ${sum / array.length}`);
}

avgValue(arr);

/* Task 3: Работа с concat. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. */
console.log([1, 2, 3].concat([4, 5, 6]));

/* Task 4: Работа с reverse. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */
console.log([1, 2, 3].reverse());

/* Task 5: Работа с push, unshift.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
                                    Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
                                     */
let test = [1,2,3];
test.push(4,5,6);
console.log(test);
test.unshift(4,5,6);
console.log(test);

/* Task 6: Работа с shift, pop. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. */

let strArr = ['js', 'css', 'jq'];
strArr.shift();
console.log(strArr);
console.log(strArr.pop());

/* Task 7: Работа с slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
                           Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. */
console.log([1,2,3,4,5].slice(0,3))
console.log([1,2,3,4,5].slice(3,5))

/* Task 8: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */

let arr8 = [1, 2, 3, 4, 5];
arr8.splice(1,2);
console.log("Splice",arr8);
let arr81 = [1, 2, 3, 4, 5].splice(1,3);
console.log(arr81);

/* Task 9: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].  */
let arr9 = [1,2,3,4,5];
arr9.splice(3, 0, 'a', 'b', 'c');
console.log(arr9);

/* Task 10: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */
let arr10 = [1,2,3,4,5];
arr10.splice(1, 0, 'a', 'b'); 
arr10.splice(5,0,'c');
arr10.splice(8,0,'e');
console.log(arr10);

/* Task 11: Работа с sort. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. */
let arr11 = [3, 4, 1, 2, 7];
arr11.sort();
console.log('Task 11', arr11);

/* Task12: Работа с Object.keys. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. */
const obj12 = {
  js:'test',
  jq: 'hello',
  css: 'world',
};

console.log(Object.keys(obj12));

/* Task 13: необходимо создать функцию hasElem, 
которая параметрами будет принимать массив и строку, и возвращать true, 
если строка есть в массиве, и false - если нет */

function hasElem(array, string) {  
  if (array.includes(string)) return true;
  return false;
}
console.log(hasElem(['apple', 'samsung', 'xiaomi', 'oneplus'], 'oneplus'));

/* Task 14: Дан массив с числами. Проверьте, что в этом массиве есть указанное число.
 Если есть - вернуть true, а если нет - вернуть false. */

function hasNumber(array, number) {
  if (array.includes(number)) return true;
  return false;
}

hasNumber(arr11, 3);

/* Task 15: Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false. */
function hasTwoNumbers(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i+1]) return true;
  }
  return false;
}

console.log(hasTwoNumbers([1,4,5,6,12,12]));
console.log(hasTwoNumbers([1,4,5,6,12,1]));