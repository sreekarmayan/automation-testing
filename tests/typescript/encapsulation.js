var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 1000;
    }
    BankAccount.prototype.showBalance = function () {
        console.log(this.balance);
    };
    return BankAccount;
}());
var acc = new BankAccount();
acc.showBalance();
