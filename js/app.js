'use strict';

// ---------------- Salmon cookie Object ----------------
var salmonObjs = [];
function SalmonCookie(name, customerMin, customerMax, avgCookie) {
  (this.name = name),
  (this.times = [
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
  ]);
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerRandomNums = [];
  this.avgCookie = avgCookie;
  this.cookiesRandomNums = [];
  this.totalCookiesPerLocation = 0;
  salmonObjs.push(this);
}

// This function should generat a random number for a given max and min numbers for cust0mers
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
var seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
var tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
var dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
var paris = new SalmonCookie('Paris', 20, 65, 2.3);
var lima = new SalmonCookie('Lima', 2, 16, 4.6);

//-----------displaying all the table -------------

//adding table element
var container = document.getElementById('objContainer');
var table = document.createElement('table');
table.setAttribute('id', 'salmonTable');
container.appendChild(table);

displayHeader();
displayData();
displayFooter();

// --------------Functions Section -------------------

function displayHeader() {
  //adding the header of the table
  var timesRow = document.createElement('tr');
  var emptyCell = document.createElement('th');
  emptyCell.textContent = '';
  timesRow.appendChild(emptyCell);
  for (var i = 0; i < salmonObjs[0].times.length; i++) {
    var timesCell = document.createElement('th');
    timesCell.textContent = salmonObjs[0].times[i];
    timesRow.appendChild(timesCell);
  }
  table.appendChild(timesRow);

  // Daily Location Total
  //adding the label
  var dailyTotalLabel = document.createElement('th');
  dailyTotalLabel.textContent = 'Daily Location Total';
  timesRow.appendChild(dailyTotalLabel);
}

function displayData() {
  //adding the title and the data to the table
  SalmonCookie.prototype.render = function () {
    var dataRow = document.createElement('tr');
    //Adding title column
    var titleCell = document.createElement('td');
    titleCell.textContent = this.name;
    dataRow.appendChild(titleCell);
    //Adding data
    for (var i = 0; i < this.times.length; i++) {
      var dataCell = document.createElement('td');
      dataCell.textContent = this.cookiesRandomNums[i];
      dataRow.appendChild(dataCell);
    }
    var dailyTotalCell = document.createElement('td');
    dailyTotalCell.textContent = this.totalCookiesPerLocation;
    dataRow.appendChild(dailyTotalCell);

    // here we will check if there is a total row so when we add new elements. will be add before that row
    var totalRow = document.getElementById('total');
    if (!totalRow) {
      table.appendChild(dataRow);
    } else {
      table.insertBefore(dataRow, totalRow);
    }
  };

  //----adding the functions to the objects-----
  for (var d = 0; d < salmonObjs.length; d++) {
    salmonObjs[d].getCustomerRandom();
    salmonObjs[d].getCookiesNum();
    salmonObjs[d].render();
  }
}

function displayFooter() {
  //----------- Dispalying the totals--------------
  var totalsArr = getTotalPerhour()[0];
  var totalsSum = getTotalPerhour()[1];

  var totalsRow = document.createElement('tr');
  totalsRow.setAttribute('id', 'total');
  table.appendChild(totalsRow);
  //adding total label
  var totalsLabel = document.createElement('td');
  totalsLabel.textContent = 'Totals';
  totalsRow.appendChild(totalsLabel);

  //adding total array
  for (var v = 0; v < totalsArr.length; v++) {
    var totalCell = document.createElement('td');
    totalCell.textContent = totalsArr[v];
    totalsRow.appendChild(totalCell);
  }
  //adding the sum of totals cell
  var totalsSumCell = document.createElement('td');
  totalsSumCell.textContent = totalsSum;
  totalsRow.appendChild(totalsSumCell);
}

// Generat a random number of  given min and max value
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculate the product of a given two parameter
function multiply(a, b) {
  return Math.floor(a * b);
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
  return [totalPerHour, sumTotalPerHour];
}

// ------- Modal implementation ------------

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// --------function to create new object----------

// Getting the values of the form

var locationForm = document.getElementById('locationForm');
locationForm.addEventListener('submit', createObject);

function createObject() {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var minimum = Number(document.getElementById('minimum').value);
  var maximum = Number(document.getElementById('maximum').value);
  var average = Number(document.getElementById('average').value);
  var newObject = new SalmonCookie(name, minimum, maximum, average);
  // console.log(salmonObjs);
  newObject.getCustomerRandom();
  newObject.getCookiesNum();
  newObject.render();
  var salmonTable = document.getElementById('salmonTable');
  salmonTable.deleteRow(salmonObjs.length + 1);
  displayFooter();
  modal.style.display = 'none';
}
