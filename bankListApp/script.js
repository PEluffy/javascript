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

const updateUI = function (currentAccount) {
  displayMovements(currentAccount.movements);
  displayDipositsAndIntrest(currentAccount);
  displayWithdrawal(currentAccount.movements);
  displayTotal(currentAccount);
};
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
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
const displayTotal = function (accounts) {
  const total = accounts.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${total} €`;
  accounts.balance = total;
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
    updateUI(currentAccount);
    containerApp.style.opacity = '1';
  }
  console.log(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  const mov = currentAccount.movements;
  const deposit = mov.filter(function (mov, i, arr) {
    return mov > 0;
  });
  console.log(deposit);
  if (
    amount > 0 &&
    deposit.some(function (mov, i, arr) {
      return mov >= 0.1 * amount;
    })
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    console.log('lone is granted');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value;
  });
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Transfer
    console.log(`Transfering balance of ${amount} to ${receiverAcc.username}`);
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (account) {
      return account.username === currentAccount.username;
    });
    accounts.splice(index, 1);
    (inputClosePin.value == inputCloseUsername.value) == '';
    containerApp.style.opacity = '0';
  }
});
let sortedState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// const dogsJulia = [3, 5, 2, 12, 7];

// const dogsKate = [9, 16, 6, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const concatArray = dogsJuliaCorrected.concat(dogsKate);
//   concatArray.forEach(function (dogsAge, index) {
//     const adultOrNot = dogsAge < 3 ? 'NotAdult' : 'Adult';
//     console.log(`${index}th dog of Age ${dogsAge} is ${adultOrNot}`);
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// const createUsername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(val => val.slice(0, 1))
//       .join('');
//   });
// };
// createUsername(accounts);
// console.log(accounts);

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// let diceRoll = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * 6) + 1
// );
// // console.log(diceRoll);
// // let a = Math.floor(Math.random() * 6) + 1;
// // console.log(a);

// //Array Methods Practice

// //total bank deposits and withdrawl
// const bankTotalSum = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur);
// console.log(bankTotalSum);

// const sumOfDipositAndWithdrawl = {};
// const deposits = new Array();
// //total deposit
// const totalDeposit = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(function (mov) {
//     return mov > 0;
//   })
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDeposit);

// //total withdrawl
// const totalWithdrawl = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(function (mov) {
//     if (mov > 0) {
//       deposits.push(mov);
//     }
//     return mov < 0;
//   })
//   .reduce((acc, cur) => acc + cur * -1, 0);
// console.log(totalWithdrawl);

// //deposits in bank that is atleast 1000

// console.log(deposits);
// const depositsOver1000 = deposits
//   .filter(dep => dep > 1000)
//   .reduce((acc, cur) => acc + 1, 1);
// console.log(depositsOver1000);

// //creating a object that contain sum of deposits and withdrawl

// const { deposit, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, value) => {
//       sums[value > 0 ? 'deposit' : 'withdrawal'] += value;
//       return sums;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );
// console.log(deposit, withdrawal);

// //this is a nice title ->This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalizer = function (word) {
//     return word[0].toUpperCase() + word.slice(1);
//   };
//   const exception = [
//     'a',
//     'an',
//     'the',
//     'but',
//     'or',
//     'on',
//     'in',
//     'and',
//     'with',
//     'is',
//   ];
//   const word = title
//     .toLowerCase()
//     .split(' ')
//     .map(function (word, index) {
//       return index === 0 || !exception.includes(word)
//         ? capitalizer(word)
//         : word;
//     })
//     .join(' ');
//   return word;
// };
// console.log(convertTitleCase('this is a nice title'));

const dogs = [
  {
    weight: 22,
    curfood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curfood: 200,
    owners: ['Maltilda'],
  },
  {
    weight: 13,
    curfood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curfood: 340,
    owners: ['Michael'],
  },
];
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

const dogSarah = dogs.find(function (dog) {
  return dog.owners.includes('Sarah');
});

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curfood > dogSarah.recommendedFood ? 'much' : 'little'
  } food.`
);

const ownersEatTooMuch = dogs
  .filter(function (dog) {
    return dog.curfood > dog.recommendedFood;
  })
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(function (dog) {
    return dog.curfood < dog.recommendedFood;
  })
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

const dogWithExactRec = dogs.some(function (dog) {
  return dog.curfood === dog.recommendedFood;
});

console.log(dogWithExactRec);
const checkEactingOkay = function (dog) {
  return (
    dog.curfood > dog.recommendedFood * 0.9 &&
    dog.curfood < dog.recommendedFood * 1.1
  );
};

const dogWithOkFood = dogs.some(checkEactingOkay);
console.log(dogWithOkFood);
console.log(dogs);

console.log(dogs.filter(checkEactingOkay));

const dogsSorted = dogs.slice().sort(function (a, b) {
  return a.recommendedFood - b.recommendedFood;
});
console.log(dogsSorted);
