"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "Deposit";
    TransactionType["Withdraw"] = "Withdraw";
})(TransactionType || (TransactionType = {}));
let accounts = [];
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive = true) {
    let newAccount = {
        accountNo,
        firstname,
        lastname,
        balance: initialDeposit,
        isActive,
        transactions: []
    };
    accounts.push(newAccount);
    return newAccount;
}
function processTransaction(accountNo, amount, transactionType) {
    let account = accounts.find(acc => acc.accountNo === acc.accountNo);
    if (!account)
        return "Error! Account not found";
    if (!account.isActive)
        return "Error! Account is not Activate";
    if (transactionType === TransactionType.Withdraw && account.balance < amount)
        return "Insufficient funds for withdrawal";
    account.transactions.push({ accountNo, amount, type: transactionType });
    account.balance += transactionType === TransactionType.Deposit ? amount : -amount;
    return `${amount} ${transactionType === TransactionType.Deposit ? 'deposited into' : 'withdrawn from'} account number ${accountNo}`;
}
function getBalance(accountNo) {
    let account = accounts.find(acc => acc.accountNo === accountNo);
    return account ? account.balance : "Account not found";
}
function getTransactionHistory(accountNo) {
    let account = accounts.find(acc => acc.accountNo === accountNo);
    return account ? account.transactions : "Account not found";
}
function checkActiveStatus(accountNo) {
    let account = accounts.find(acc => acc.accountNo === accountNo);
    return account ? account.isActive : "Account not found";
}
function closeAccount(accountNo) {
    let account = accounts.find(acc => acc.accountNo === accountNo);
    if (!account)
        return "Error! Account not found";
    return `Account ${accountNo} closed`;
}
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
