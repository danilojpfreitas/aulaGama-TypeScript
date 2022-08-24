import { Cp } from "./cp.class.js";
import { Cc } from "./cc.class.js";
import { Accounts } from "./accounts.interface.js";
import { Account } from "./account.class.js";
import { Client } from "../client/client.class.js";

let accounts: Accounts = {
    1: new Cc("01", "01", new Client("Danilo", "Freitas", "000.000.000-00"), 1),
    2: new Cp("02", "01", new Client("Pedro", "Gomes", "000.000.000-00"), 2)
}

export const findAll = async (): Promise<Accounts> => Object.values(accounts)
export const find = async (id: number): Promise<Account> => accounts[id]
export const create = async (newAccount: Cp | Cc): Promise<Account> => {
    const id = newAccount.getId()

    accounts[id] = newAccount

    return accounts[id]
}
export const update = async (id: number, accountUpdate: Account): Promise<Account | null> => {
    const account = await find(id)

    if(!account){

    return null
    }
    accounts[id] = accountUpdate

    return accounts[id]
}
export const remove = async (id: number): Promise<null | void> => {
    const account = await find(id)

    if(!account){
        return null
    }

    delete accounts[id]
}
export const deposit = async (id: number, value: number): Promise<number | null> => {
    const account = await find(id)

    if(!account){
        return null
    }

    account.deposit(value)

    return account.deposit(value)
}