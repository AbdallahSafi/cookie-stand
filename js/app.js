'use strict';

// ---------------- Salmon cookie Object ----------------
function SalmonCookie(times, customerMin, customerMax, avgCookie) {
  this.times = times;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.avgCookie = avgCookie;
  this.customerRandomNums = [];
  this.sumCustomerRandomNums = 0;
  this.totalCookies = [];
}

// This function should generat a random number for a given max and min numbers
SalmonCookie.prototype.getCustomerRandom = function () {
  for (var i = 0; i < this.times.length; i++) {
    var randomNum = generateRandomCostumerNum(
      this.customerMin,
      this.customerMax
    );
    //adding to array
    this.customerRandomNums.push(randomNum);
    // sum all the items
    this.sumCustomerRandomNums = this.sumCustomerRandomNums + randomNum;
  }
};



var seattle = new SalmonCookie(
  [
    '6:00am',
    '7:00am',
    '8:00am',
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '6:00pm',
    '7:00pm',
  ],
  23,
  65,
  6.3
);

seattle.getCustomerRandom();
console.log(seattle.customerRandomNums);
console.log(seattle.sumCustomerRandomNums);


// SalmonCookie.prototype.getCookiesNum = function () {
//   this.cookiesRandomNum = multiplyCookieCostumer(
//     this.customerRandomNum,
//     this.avgCookie
//   );
// };

//------------Objects Section ----------------
// First-Object: seattle
// var seattle = {
//   customerMin: 23,
//   customerMax: 65,
//   avgCookie: 6.3,
//   customerRandomNum: 0,
//   cookiesRandomNum: 0,
//   totalCookies: [],
//   getCustomerRandom: function (min, max) {
//     this.customerRandomNum = generateRandomCostumerNum(min, max);
//   },
//   getCookiesNum: function (costumerNum, cookieNum) {
//     this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
//   },
//   displayingObject: function () {
//     rendering(this, 'seattle');
//   },
// };

// // Second-Object: tokyo
// var tokyo = {
//   customerMin: 3,
//   customerMax: 24,
//   avgCookie: 1.2,
//   customerRandomNum: 0,
//   cookiesRandomNum: 0,
//   totalCookies: [],
//   getCustomerRandom: function (min, max) {
//     this.customerRandomNum = generateRandomCostumerNum(min, max);
//   },
//   getCookiesNum: function (costumerNum, cookieNum) {
//     this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
//   },
//   displayingObject: function () {
//     rendering(this, 'Tokyo');
//   },
// };

// // Thired-Object: Dubai
// var dubai = {
//   customerMin: 11,
//   customerMax: 38,
//   avgCookie: 3.7,
//   customerRandomNum: 0,
//   cookiesRandomNum: 0,
//   totalCookies: [],
//   getCustomerRandom: function (min, max) {
//     this.customerRandomNum = generateRandomCostumerNum(min, max);
//   },
//   getCookiesNum: function (costumerNum, cookieNum) {
//     this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
//   },
//   displayingObject: function () {
//     rendering(this, 'Dubai');
//   },
// };

// // Fourth-Object: Paris
// var paris = {
//   customerMin: 20,
//   customerMax: 38,
//   avgCookie: 2.3,
//   customerRandomNum: 0,
//   cookiesRandomNum: 0,
//   totalCookies: [],
//   getCustomerRandom: function (min, max) {
//     this.customerRandomNum = generateRandomCostumerNum(min, max);
//   },
//   getCookiesNum: function (costumerNum, cookieNum) {
//     this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
//   },
//   displayingObject: function () {
//     rendering(this, 'Paris');
//   },
// };

// // Fifth-Object: Lima
// var lima = {
//   customerMin: 20,
//   customerMax: 38,
//   avgCookie: 2.3,
//   customerRandomNum: 0,
//   cookiesRandomNum: 0,
//   totalCookies: [],
//   getCustomerRandom: function (min, max) {
//     this.customerRandomNum = generateRandomCostumerNum(min, max);
//   },
//   getCookiesNum: function (costumerNum, cookieNum) {
//     this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
//   },
//   displayingObject: function () {
//     rendering(this, 'Lima');
//   },
// };

// //----------Displaying All Objects----------------
// seattle.displayingObject();
// tokyo.displayingObject();
// dubai.displayingObject();
// paris.displayingObject();
// lima.displayingObject();

// --------------Functions Section -------------------
// Generat a random number of  given min and max value
function generateRandomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// //calculate the product of a given two parameter
// function multiplyCookieCostumer(costumerNum, cookieNum) {
//   return Math.floor(costumerNum * cookieNum);
// }

// //Rendering Function
// function rendering(obj, title) {
//   var objectsContainer = document.getElementById('objContainer');
//   var container = document.createElement('div');
//   objectsContainer.appendChild(container);

//   //Title
//   var heading = document.createElement('h2');
//   heading.textContent = title;
//   container.appendChild(heading);
//   var list = document.createElement('ul');

//   for (var i = 1; i <= 14; i++) {
//     if (i < 7) {
//       //Generate Cookies
//       obj.getCustomerRandom(obj.customerMin, obj.customerMax);
//       obj.getCookiesNum(obj.customerRandomNum, obj.avgCookie);
//       obj.totalCookies.push(obj.cookiesRandomNum);
//       var listItem = document.createElement('li');
//       var hour = i + 5;
//       listItem.textContent =
//         hour + 'am' + ' : ' + obj.cookiesRandomNum + ' cookies';
//       list.appendChild(listItem);
//     } else if (i === 7) {
//       //Generate Cookies
//       obj.getCustomerRandom(obj.customerMin, obj.customerMax);
//       obj.getCookiesNum(obj.customerRandomNum, obj.avgCookie);
//       obj.totalCookies.push(obj.cookiesRandomNum);
//       listItem = document.createElement('li');
//       hour = i + 5;
//       listItem.textContent =
//         hour + 'pm' + ' : ' + obj.cookiesRandomNum + ' cookies';
//       list.appendChild(listItem);
//     } else {
//       //Generate Cookies
//       obj.getCustomerRandom(obj.customerMin, obj.customerMax);
//       obj.getCookiesNum(obj.customerRandomNum, obj.avgCookie);
//       obj.totalCookies.push(obj.cookiesRandomNum);
//       listItem = document.createElement('li');
//       hour = i - 7;
//       listItem.textContent =
//         hour + 'pm' + ' : ' + obj.cookiesRandomNum + ' cookies';
//       list.appendChild(listItem);
//     }
//   }
//   console.log(obj.totalCookies);
//   var countOfCookies = 0;
//   for (var j = 0; j < obj.totalCookies.length; j++) {
//     countOfCookies = countOfCookies + obj.totalCookies[j];
//   }

//   listItem = document.createElement('li');
//   listItem.textContent = 'Total: ' + countOfCookies + ' cookies';
//   list.appendChild(listItem);
//   container.appendChild(list);
// }
