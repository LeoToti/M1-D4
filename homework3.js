/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (x,y){
    return x*y/2
}
console.log(area(3,5))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(x,y){
    return x+y
}
console.log(crazySum(5,6))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(x){
    let absDiff = Math.abs(x - 19)
    if (absDiff > 19) {
        return absDiff*3
    }
    else return absDiff
}

console.log(crazyDiff(5))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
 const boundary = function(n) {
     if (n>=20 && n<=100){
         return true 
     }
     else 
     return false
 }

 console.log(boundary(20))

 /* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(string1) {
let var1 = string1.split(' ')
if (var1.includes( 'Strive')){
    return (`${string1}`)
}
else {
    return (`Strive ${string1}`)
}

}

console.log(strivify('Ciao Bello'))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(n){
    if(n%3==0 && n%7==0){
    console.log("It's a multiple of 3 and 7")
    }
    else if ((n%3==0 && n%7!==0)){
        console.log("It's a multiple of 3")
    }
    else if ((n%3!==0 && n%7==0)){
        console.log("It's a multiple of 7")

    }

}

console.log(check3and7(9))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(str){
    let splitStr = str.split("")
    let revStr = splitStr.reverse()
    let joinStr = revStr.join(" ")
    return joinStr
}

console.log(reverseString('ciao'))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(str){
    splitStr = str.split(" ")
    console.log(splitStr)
    let strArray = []
    for (i=0 ;i < splitStr.length; i++){
        let sec = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
        strArray.push(sec)

    }
    
     
    return strArray.join(" ")
}

console.log(upperFirst('Ciao come va'))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(str){

        var tmp = str.split(''); // convert to an array
        
        tmp.shift()
    
        tmp.pop()
        return tmp.join(''); // reconstruct the string
    
}
console.log(cutString('Ciao come va oroc'))



/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n){
    
    array = []
    for (i=0;i<n;i++){
        randdomNums = Math.floor(Math.random()*10)
        array.push(randdomNums)


    }
    return array
}

console.log(giveMeRandom(5))