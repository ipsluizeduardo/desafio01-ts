import { DioAccount } from "./DioAccount";

export class RiggedAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (amountDeposit: number): void => {
        super.deposit(amountDeposit + 10)
    }
}