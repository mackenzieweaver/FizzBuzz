// Fizz Buzz
function FizzBuzz(fizz, buzz, upperLimit) {
    for (let i = 1; i <= upperLimit; i++) {
        if ((i % fizz == 0) && (i % buzz == 0)) {
            console.log('FizzBuzz');
        } else if (i % fizz == 0) {
            console.log('Fizz');
        } else if (i % buzz == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}