//Exercise 1
var customerName = 'bob';

//Exercise 2
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

//Exercise 3
function setBestCustomer() {
    bestCustomer = 'not bob'; //global variable
    console.log('setBestCustomer:', bestCustomer);
}

//Exercise 4
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log('overwriteBestCustomer:', bestCustomer);
}

//Exercise 5
const leastFavoriteCustomer = 'someone else';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}


