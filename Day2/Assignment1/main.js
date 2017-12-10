//Task1 
/*
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random(1) * 20));
}
//console.log(arr);
//OR
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
*/



//Task2
/*
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random(1) * 20));
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}*/


//Task3

//Task3-a
var arr = [];
var even_num = 0;
var odd_num = 0;
for (var i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random(1) * 20));
    if (arr[i] % 2 === 0) {
        even_num = even_num + 1;
    }
    if (arr[i] % 2 === 1) {
        odd_num = odd_num + 1;
    }
}
console.log(arr);
if (even_num > odd_num) {
    console.log("This is Even Array");
    console.log("Total even numbers in above Array are " + even_num);
} else if (even_num === odd_num) {
    console.log("Equal Array");
    console.log("Even numbers=" + even_num + " ;Odd numbers=" + odd_num);
} else {
    console.log("This is an Odd Array");
    console.log("Total odd numbers in above Array are " + odd_num);
}