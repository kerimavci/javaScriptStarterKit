/*
    Girilen sonsuz parametrelerden asal sayıları bize gösteren fonksiyon
*/

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
            if (prime != numbers[i]) 
            
                {
                console.log("Bu sayı asal sayıdır : " + numbers[i])
                }
    }
}
isitPrime(2,4,6,7,9,11,13,21)
