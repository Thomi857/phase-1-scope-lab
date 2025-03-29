// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "not bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob"; // Declare bestCustomer in global scope
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}

let  fruits=["Orange", "Apple","Mellon","grapes"];
fruits.unshift("kiwi");

console.log(fruits);

const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}

logWinningNumbers(winningNumbers);
// LOG: Winning numbers: [32, 9, 14, 33, 48, 5]


const spread = [...fruits  , ...winningNumbers]

console.log(spread);

const superheroes = ["Catwoman", "Storm", "Jessica Jones" , "stranger things"];
superheroes.shift();

console.log(superheroes);

const heroes = superheroes.slice();
console.log(heroes);

for(cot of superheroes){
    console.log(`${cot} : ${superheroes}`);
}