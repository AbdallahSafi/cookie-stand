'use strict';

//------------Objects Section ----------------
// First-Object: seattle
var seattle = {
  customerMin: 23,
  customerMax: 65,
  avgCookie: 6.3,
  customerRandomNum: 0,
  cookiesRandomNum: 0,
  totalCookies: [],
  getCustomerRandom: function (min, max) {
    this.customerRandomNum = generateRandomCostumerNum(min, max);
  },
  getCookiesNum: function (costumerNum, cookieNum) {
    this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
  },
  displayingObject: function () {
    rendering(this, 'seattle');
  },
};

// Second-Object: tokyo
var tokyo = {
  customerMin: 3,
  customerMax: 24,
  avgCookie: 1.2,
  customerRandomNum: 0,
  cookiesRandomNum: 0,
  totalCookies: [],
  getCustomerRandom: function (min, max) {
    this.customerRandomNum = generateRandomCostumerNum(min, max);
  },
  getCookiesNum: function (costumerNum, cookieNum) {
    this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
  },
  displayingObject: function () {
    rendering(this, 'Tokyo');
  },
};

// Thired-Object: Dubai
var dubai = {
  customerMin: 11,
  customerMax: 38,
  avgCookie: 3.7,
  customerRandomNum: 0,
  cookiesRandomNum: 0,
  totalCookies: [],
  getCustomerRandom: function (min, max) {
    this.customerRandomNum = generateRandomCostumerNum(min, max);
  },
  getCookiesNum: function (costumerNum, cookieNum) {
    this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
  },
  displayingObject: function () {
    rendering(this, 'Dubai');
  },
};

// Fourth-Object: Paris
var paris = {
  customerMin: 20,
  customerMax: 38,
  avgCookie: 2.3,
  customerRandomNum: 0,
  cookiesRandomNum: 0,
  totalCookies: [],
  getCustomerRandom: function (min, max) {
    this.customerRandomNum = generateRandomCostumerNum(min, max);
  },
  getCookiesNum: function (costumerNum, cookieNum) {
    this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
  },
  displayingObject: function () {
    rendering(this, 'Paris');
  },
};

// Fifth-Object: Lima
var lima = {
  customerMin: 20,
  customerMax: 38,
  avgCookie: 2.3,
  customerRandomNum: 0,
  cookiesRandomNum: 0,
  totalCookies: [],
  getCustomerRandom: function (min, max) {
    this.customerRandomNum = generateRandomCostumerNum(min, max);
  },
  getCookiesNum: function (costumerNum, cookieNum) {
    this.cookiesRandomNum = multiplyCookieCostumer(costumerNum, cookieNum);
  },
  displayingObject: function () {
    rendering(this, 'Lima');
  },
};

//----------Displaying All Objects----------------
seattle.displayingObject();
tokyo.displayingObject();
dubai.displayingObject();
paris.displayingObject();
lima.displayingObject();

// --------------Functions Section -------------------
// Generat a random number of  given min and max value
function generateRandomCostumerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculate the product of a given two parameter
function multiplyCookieCostumer(costumerNum, cookieNum) {
  return Math.floor(costumerNum * cookieNum);
}

//Rendering Function
function rendering(obj, title) {
  var objectsContainer = document.getElementById('objContainer');
  var container = document.createElement('div');
  objectsContainer.appendChild(container);

  //Title
  var heading = document.createElement('h2');
  heading.textContent = title;
  container.appendChild(heading);
  var list = document.createElement('ul');

  for (var i = 1; i <= 14; i++) {
    if (i < 7) {
      //Generate Cookies
      obj.getCustomerRandom(obj.customerMin, obj.customerMax);
      obj.getCookiesNum(obj.customerRandomNum, obj.avgCookie);
      obj.totalCookies.push(obj.cookiesRandomNum);
      var listItem = document.createElement('li');
      var hour = i + 5;
      listItem.textContent =
        hour + 'am' + ' : ' + obj.cookiesRandomNum + ' cookies';
      list.appendChild(listItem);
    } else if (i === 7) {
      //Generate Cookies
      obj.getCustomerRandom(obj.customerMin, obj.customerMax);
      obj.getCookiesNum(obj.customerRandomNum, obj.avgCookie);
      obj.totalCookies.push(obj.cookiesRandomNum);
      listItem = document.createElement('li');
      hour = i + 5;
      listItem.textContent =
        hour + 'pm' + ' : ' + obj.cookiesRandomNum + ' cookies';
      list.appendChild(listItem);
    } else {
      //Generate Cookies
      obj.getCustomerRandom(obj.customerMin, obj.customerMax);
      obj.getCookiesNum(obj.customerRandomNum, obj.avgCookie);
      obj.totalCookies.push(obj.cookiesRandomNum);
      listItem = document.createElement('li');
      hour = i - 7;
      listItem.textContent =
        hour + 'pm' + ' : ' + obj.cookiesRandomNum + ' cookies';
      list.appendChild(listItem);
    }
  }
  console.log(obj.totalCookies);
  var countOfCookies = 0;
  for (var j = 0; j < obj.totalCookies.length; j++) {
    countOfCookies = countOfCookies + obj.totalCookies[j];
  }

  listItem = document.createElement('li');
  listItem.textContent = 'Total: ' + countOfCookies + ' cookies';
  list.appendChild(listItem);
  container.appendChild(list);
}
