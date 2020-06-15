"use strict";

// ---------------- Salmon cookie Object ----------------
var salmonObjs = [];
function SalmonCookie(customerMin, customerMax, avgCookie) {
  this.times = [
    "6:00am",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
  ];
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerRandomNums = [];
  this.avgCookie = avgCookie;
  this.cookiesRandomNums = [];
  this.totalCookiesPerLocation = 0;
  salmonObjs.push(this);
}

// This function should generat a random number for a given max and min numbers
SalmonCookie.prototype.getCustomerRandom = function () {
  for (var i = 0; i < this.times.length; i++) {
    var randomNum = generateRandomNum(this.customerMin, this.customerMax);
    //adding to array
    this.customerRandomNums.push(randomNum);
  }
};

// This function should calculate the cookies avg number for each hour
SalmonCookie.prototype.getCookiesNum = function () {
  for (var j = 0; j < this.customerRandomNums.length; j++) {
    var cookieNum = multiply(this.customerRandomNums[j], this.avgCookie);
    //adding to array
    this.cookiesRandomNums.push(cookieNum);
    // sum all the items
    this.totalCookiesPerLocation = this.totalCookiesPerLocation + cookieNum;
  }
};

// Creating the objects
var seattle = new SalmonCookie(23, 65, 6.3);
var tokyo = new SalmonCookie(3, 24, 1.2);
var dubai = new SalmonCookie(11, 38, 3.7);
var paris = new SalmonCookie(20, 65, 2.3);
var lima = new SalmonCookie(2, 16, 4.6);

for (var d = 0; d < salmonObjs.length; d++) {
  salmonObjs[d].getCustomerRandom();
  salmonObjs[d].getCookiesNum();
}

//Calculating the Total of cookies per hour
function getTotalPerhour() {
  var totalPerHour = [];
  var sumTotalPerHour = 0;
  for (var z = 0; z < salmonObjs[0].times.length; z++) {
    var perHour = 0;
    for (var y = 0; y < salmonObjs.length; y++) {
      perHour = perHour + salmonObjs[y].cookiesRandomNums[z];
    }
    totalPerHour.push(perHour);
    sumTotalPerHour = sumTotalPerHour + perHour;
  }
}

// console.log(seattle.cookiesRandomNums);
// console.log(tokyo.cookiesRandomNums);
// console.log(dubai.cookiesRandomNums);
// console.log(paris.cookiesRandomNums);
// console.log(lima.cookiesRandomNums);

// console.log(totalPerHour);
// console.log(sumTotalPerHour);

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
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculate the product of a given two parameter
function multiply(a, b) {
  return Math.floor(a * b);
}

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
