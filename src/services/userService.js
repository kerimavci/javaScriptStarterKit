import { users } from "../data/users.js"
import dataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){   // doğrulamadan geçiyor hata yoksa araya push eder.
                    this.customers.push(user)
                    }
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
                default:
                    this.errors.push(new dataError("Wrong User Type",user))
                    break;
            }
        }
    }
// user.age == user ["age"] bu ikisi aynıdır.
    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName age city".split("  ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new dataError(`Validation problem. ${field} is required`, user))
                // dolar bloğu içinde yeni bir js kodu geçebiliriz. tırnak işaretini altgr virgül ile yaptık.
            }           
        }
        return hasErrors;
    }


    add(user) {
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
       // return this.users
    }

    getById(id) {
        //this.users.find(u=>u.id === id)
    }
}
