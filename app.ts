import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(350)
peopleAccount.withdraw(100)
peopleAccount.getBalance()
peopleAccount.getName()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(700)
companyAccount.getBalance()
companyAccount.getLoan(300)
companyAccount.withdraw(100)
companyAccount.getName()
const newAccount: NewAccount = new NewAccount("Nicolas", 100) 
newAccount.deposit(300)
newAccount.getBalance()
newAccount.withdraw(100)
newAccount.getName()