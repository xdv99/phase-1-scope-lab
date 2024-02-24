// Write your solution in this file!
var customerName = "bob";

const leastFavoriteCustomer = "test";

var bestCustomer;

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    bestCustomer = "not bob";
}

function overwriteBestCustomer (name) {
    bestCustomer = name;
}

function changeLeastFavoriteCustomer (name) {
    leastFavoriteCustomer = name;
}