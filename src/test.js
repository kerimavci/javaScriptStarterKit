/*
    Girilen sonsuz parametrelerden asal sayıları bize gösteren fonksiyon
*/

function isitPrime (...numbers) {

    console.log("Sayılar : " + numbers)

    for (let i = 0; i < numbers.length; i++) {

        if(numbers[i] == 0 || numbers[i] == 1 ) {
            console.log("Bu sayı asal değildir : " + numbers[i])
            continue
        }

            for (let j = 2; j < numbers[i]; j++ ) {

                if (numbers[i] %j=== 0) {

                    console.log("Bu sayı asal değildir : " + numbers[i])

                    let common = 0
                    common = numbers[i]
                }
            }
                if (common != numbers[i]) 

                    {
                    console.log("Bu sayı asal sayıdır : " + numbers[i])
                    }
    }
}
isitPrime(0,1,2,6,11,8,13,21)


/* Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan fonksiyon */

function friendNumbers(sayi1,sayi2) {

let sum1 = 0
let sum2 = 0

    for (let i = 1; i < sayi1; i++) {
        
        if(sayi1 % i == 0) {

            sum1 += i
        }  
    }
    
    for (let j = 1; j < sayi2; j++) {
        
        if(sayi2 % j == 0) {

            sum2 += j
        }    
    }
    console.log(sayi1 + " sayısının pozitif bölenleri toplamı : " + sum1 + "dir.")
    console.log(sayi2 + " sayısının pozitif bölenleri toplamı : " + sum2 + "dir.")

    if(sum1  == sayi2  && sum2  == sayi1 ) 
        { console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır. ") }
    else console.log(sayi1 + " ve " + sayi2 + " arkadaş sayı değillerdir. ")
}

friendNumbers(220,284)


/* 1000'e kadarki tüm mükemmel sayıları listeleyen fonksiyon */

let perfectNumbers = function () {
let toplam = 0
console.log("1000'e kadar olan mükemmel sayılar sırasıyla şunlardır : ")

    for (let i = 1; i < 1000; i++) {

            toplam = 0

        for (let j = 1; j <= i; j++) {

            if(i % j == 0) {

                toplam += j
            }
        }

                if(i * 2 == toplam) {        

                    console.log(i)       
                }
    }
}

    
    /* 1000'e kadar olan tüm asal sayıları listeleyen program */
    
let uptoThousand = function() {

    let asal = 0
    let k = 0

    console.log("1000'e kadar olan asal sayılar şunlardır : ")

        for (let a = 1; a < 1000; a++) {
            
            for (let b = 2; b < a; b++){

                asal = a % b

                    if(asal == 0) {
                    break
                    }
            }
            if(asal != 0){
            k++
            console.log(a)
            }    
        }

    console.log("Toplamda " + k + " adet asal sayı bulunur. ")
}