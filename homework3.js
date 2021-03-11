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

