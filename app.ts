//Dio Bankin
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { RiggedAccount } from './class/RiggedAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(123, "du", 1)

// console.log(peopleAccount.getName())
// peopleAccount.getBalance()
// peopleAccount.deposit(10)
// peopleAccount.withdraw(3)
// peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 2)

// console.log(companyAccount.getName())
// companyAccount.getBalance()
// companyAccount.deposit(10)
// companyAccount.getLoan(300)
// companyAccount.withdraw(3)
// companyAccount.getBalance()

const riggedAccount = new RiggedAccount('Scam', 3)

// console.log(riggedAccount.getName())
// riggedAccount.getBalance()
// riggedAccount.deposit(10)
// riggedAccount.withdraw(3)
// riggedAccount.getBalance()