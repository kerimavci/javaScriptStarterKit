export default class User {
    constructor(id, firstName, lastName, city) {    // oluşturucu demek. Veri tipini tanımlayamıyoruz. string mi float mı . o yüzden bunu kullanıyoruz
        this.firstName = firstName  // this ile consturucturın firstnamesine atadık.
        this.id = id
        this.lastName = lastName
        this.city = city
    }
}