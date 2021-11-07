/*function addToCart(quantity, productName="sepetin şu an boş") 
{
    console.log("Sepete Eklendi, ürün :  " + productName + " Adet : " + quantity)    
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")

let sayHello = ()=>{
    console.log("Hello World!")  // değişken tanımlayarak fonksiyon oluşturma
}

sayHello() // değişken atadığımız fonksiyonu çağırma

let sayHello2 = function() {  // fonksiyon tanımlamanın farklı yolu
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)         // böyle kullanmak sağlıklı değil
addToCart2("Armut",2,10)        // hangi parametrenin nerede olduğunu karıştırırız
addToCart2("Limon",3,5)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün :"+product.productName)
    console.log("Adet :"+product.quantity)
    console.log("Fiyat :"+product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName) // BURASI ÖNEMLİ çıktı karpuz olacak
// çünkü product2=product3 dediğimizde product2 ve product3 aynı veriyi tutmaya başlıyor

// Değişkenler sayıysa değer tip
// Değişkenler obje ise referans tip

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)   // ekrana 20 yazdıracak çünkü sayi1 in değerini sayi2 nin değerine
// eşitledik, 
// buraları deneme yanılma iyi çalış

function addToCart4(x) { // buraya x yazmamızın bir anlamı yok x burada fonksiyonda döndürdüğümüz değer
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5},
]

addToCart4(products)

function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
}
console.log(numbers[i])
console.log(bisey) // add(20,30,40) için 20 değeri biseye atanır. kalan değerler numbersa atanır 
}
add(20,30)
add(20,30,40)                   // DÜZELT BURA OLMADI HATA VAR BAK
add(20,30,40,50) 

let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", population: "20M"},
    {name:"Marmara", population: "20M"},
    {name:"Karadeniz", population: "20M"},

    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadoluSehirleri)
console.log(icAnadolu)
console.log(marmaraSehirleri)




let newproductName, newunitPrice, newQuantity
({productName:newproductName, unitPrice:newunitPrice, quantity:newQuantity} ={productName:"Elma", unitPrice:10, quantity:5})
// manuel olarak tanımlamaları yaptık böyle yapmamız gerekiyor.
console.log(newproductName)
console.log(newunitPrice)
console.log(newQuantity)

*/


/* function isitPrime (...numbers) {
    
    console.log("Sayılar : " + numbers)

    for (let i = 0; i < numbers.length; i++) {
        
        for (let j = 2; j < numbers[i]; j++ ) {
        
            console.log("j : " + j)

            let total = numbers[i] % j
       
        if (total == 0) {
            
            console.log("Bu sayı asal değildir : " + numbers[i])
        
    }
        else {console.log("Bu sayı asal sayıdır : " + numbers[i])} 
    }  
          
    }
}

isitPrime() */


function isitPrime (...numbers) {

    console.log("Sayılar : " + numbers)

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 2; j < numbers[i]; j++ ) {

            if (numbers[i] %j=== 0) {

            console.log("Bu sayı asal değildir : " + numbers[i])

            let prime = 0
            prime = numbers[i]

            }
        }
            if(prime != numbers[i]){
            console.log("Bu sayı asal sayıdır : " + numbers[i])
            }
    }
}
isitPrime(7,11,13,2,21,23)