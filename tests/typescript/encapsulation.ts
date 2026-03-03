class BankAccount {

  balance = 1000;

  showBalance() {
    console.log(this.balance);
  }

}

let acc = new BankAccount();

acc.showBalance();