'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const displayTotal = function (movements) {
  const total = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${total} €`;
};

const displayDipositsAndIntrest = function (account) {
  const deposit = account.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${deposit}€`;

  const interest = Math.floor(
    account.movements
      .filter(function (mov) {
        return mov > 0;
      })
      .map(function (mov) {
        return (mov * account.interestRate) / 100;
      })
      .reduce(function (acc, mov) {
        return acc + mov;
      })
  );
  labelSumInterest.textContent = `${interest}€`;
};

const displayWithdrawal = function (movements) {
  const withdrawal = movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return acc.username === inputLoginUsername.value;
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ,${
      currentAccount.owner.split(' ')[0]
    }`;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    //removing field focus
    inputLoginPin.blur();
    displayMovements(currentAccount.movements);
    displayDipositsAndIntrest(currentAccount);
    displayWithdrawal(currentAccount.movements);
    displayTotal(currentAccount.movements);
    containerApp.style.opacity = '1';
  }
  console.log(currentAccount);
});
// btnSort.addEventListener('click', function () {
//   const sorted = account1.movements.sort((a, b) => a - b);
//   displayMovements(sorted);
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const dogsJulia = [3, 5, 2, 12, 7];

const dogsKate = [9, 16, 6, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const concatArray = dogsJuliaCorrected.concat(dogsKate);
  concatArray.forEach(function (dogsAge, index) {
    const adultOrNot = dogsAge < 3 ? 'NotAdult' : 'Adult';
    console.log(`${index}th dog of Age ${dogsAge} is ${adultOrNot}`);
  });
};

checkDogs(dogsJulia, dogsKate);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(val => val.slice(0, 1))
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
