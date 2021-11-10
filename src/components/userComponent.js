import { BaseLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js" // 2 nokta bulundugum klasörün bir üst klasörüne git demek.

console.log("User Component yüklendi")

let logger1 = new BaseLogger()
let userService = new UserService(logger1) // ctrl space yaptık. satır 1'i otomatik getirdi.

let user1 = new User(1, "Kerim", "AVCI", "Kırıkkale")
let user2 = new User(2, "Emirhan", "AVCI", "Sakarya")

userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById())




