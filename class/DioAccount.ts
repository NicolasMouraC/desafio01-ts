export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log(`Voce depositou ${amount} reais`)
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus()){
      if (amount < this.balance) {
        this.balance -= amount
        console.log(`Voce sacou ${amount} reais`)
      } else {
        console.log("Saldo insuficiente")
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
