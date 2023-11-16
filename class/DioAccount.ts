export  abstract class DioAccount{
    private readonly name: string 
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true 

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name 
    }

    getName = (): string => {
        return this.name;
    }

    getBalance = (): void => {
       console.log(this.balance);
    }

    deposit(depositAmount: number): void {
        if (this.validateStatus()) {
          this.balance += depositAmount
          console.log("Voce depositou " + depositAmount)
        }
      }

    withdraw = (withdrawValue: number): number => {
        withdrawValue;
        if(withdrawValue > this.balance){
            console.log("Saldo insuficiente!!!")
        }else {
            this.balance -= withdrawValue;
            console.log("Voce sacou " + withdrawValue);
        }
        return this.balance;
    }

    getValue = (): void => {
        console.log(this.balance)
    }

    protected validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error("Conta invalida")
    }
}
