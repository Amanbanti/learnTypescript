import {hasFormatter} from '../interfaces/hasFormatter.js'
export class Invoice implements hasFormatter{
    private client:string;
    private details: string;
    private amount:number;

    constructor(c:string,d:string,a:number){
        this.client =c,
        this.details=d,
        this.amount=a
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
