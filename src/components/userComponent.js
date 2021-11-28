import { BaseLogger } from "../crossCuttingConcerns/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js" // 2 nokta bulundugum klasörün bir üst klasörüne git demek.

console.log("User Component yüklendi")

let logger1 = new BaseLogger()
let userService = new UserService(logger1) // ctrl space yaptık. satır 1'i otomatik getirdi.

let user1 = new User(1, "Kerim", "AVCI", "Kırıkkale")
let user2 = new User(2, "Emirhan", "AVCI", "Sakarya")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())

//console.log(userService.getById())


let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("--------------------------")
userService.load()

let customerToAdd = new Customer(11,"Kerim","Avcı","Kırıkkale","qjwrq")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())





