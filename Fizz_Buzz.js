/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(arrSize) {
    const strArray = [];
    let num;

    for (num = 1; num <= arrSize; num++) {
        if (divByN(num, 3) && divByN(num, 5)) {
            strArray.push('FizzBuzz')
        }
        else if (divByN(num, 3)) {
            strArray.push('Fizz')
        }
        else if (divByN(num, 5)) {
            strArray.push('Buzz')
        }
        else {
            strArray.push(num.toString())
        }
    }
    return strArray;
};

function divByN(num, byN) {
    if ((num % byN) === 0) return true;
    return false;
}
