class BankAccount {

  balance = 1000;

  showBalance() {
    console.log(this.balance);
  }

}

class SavingsAccount extends BankAccount {

}

let acc = new SavingsAccount();

acc.showBalance();