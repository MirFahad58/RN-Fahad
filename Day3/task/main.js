let arr = []; //array for checking
let message = ""; //variable for message
let even = 0; //Even counter
let odd = 0; //Odd counter
let input; // to take 10 inputs

//Check array is even or odd
for (let i = 1; i <= 10; i++) {
    input = prompt("enter numbers");
    arr.push(parseInt(input));
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        //Even number detected
        even++;
    } else if (arr[i] % 2 !== 0) {
        //Odd number detected
        odd++;
    }
}

if (even > odd) {
    message = "Array is Even";
    console.log(message);
} else if (odd > even) {
    message = "Array is Odd";
    console.log(message);
} else if (even === odd) {
    message = "Array is equal";
    console.log(message);
}