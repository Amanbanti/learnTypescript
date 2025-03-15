import {hasFormatter} from '../interfaces/hasFormatter.js'
export class Payment implements hasFormatter{
    private recipient:string;
    private details: string;
    private amount:number;

    constructor(c:string,d:string,a:number){
        this.recipient =c,
        this.details=d,
        this.amount=a
    }

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}
