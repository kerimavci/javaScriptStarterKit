let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

cart.map(product=>console.log(product.productName)) // sepeti dolaş her bir product için productNameyi çalıştır.

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity + "</li>") // li = list item
})
console.log("</ul>")

let quantityOver2 = cart.filter(product=>product.quantity>2) // filtreleme yapıyoruz. quantitysi 2den büyükleri filtreleyecek.
console.log(quantityOver2) // quantity>2 olanları ekrana yazdıracak.

let total = cart.reduce((acc,product)=>acc + product.unitPrice,0) // ürünün birim fiyatını accye (akümülatöre) yükler. 0'dan başlar
console.log(total)





// Angular ve reactle geliştirdiğimiz uygulamalara SPA denir. Yani tek sayfadan oluşan veri anlamına gelir. (Single Page Application)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

console.log(cart) // Referans atama olduğu için sepete ruhsatı ekledi fakat 26. satırda

let sayi = 10
function sayiTopla(number) {
    number +=1
}

sayiTopla(sayi)
console.log(sayi) // Değer tipli olduğu için sayı değişmeyecek.