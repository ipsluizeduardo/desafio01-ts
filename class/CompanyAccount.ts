import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (loanAmount: number): void => {
        if(!this.validateStatus())
        throw new Error("Conta invalida")

        this.deposit(loanAmount);
        console.log("Voce pegou um emprestimo")
    }


}