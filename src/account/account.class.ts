import { Client } from "../client/client.class"

export class Account {
    protected account_number: string
    protected agency: string
    private balance: number
    public client: Client
    private id: number

    constructor(account_number: string, agency: string, client: Client, id: number) {
        this.id = id
        this.account_number = account_number
        this.agency = agency
        this.balance = 0
        this.client = client
    }

    public getId(): number {
        return this.id
    }

    public getBalance(): number {
        return this.balance
    }

    public deposit(value: number): number {
        if(value > 0) {
            this.balance += value

            return this.getBalance()
        }

        return 0
    }

    public withdraw(value: number): void {
        this.balance -= value
    }

    
}