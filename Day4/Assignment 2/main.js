// let a = "fahad t"; //{Checking of Split method}
// let b = a.split("");
// console.log(b);
//Task1--
// function Rev_Num(num) {
//     num = num.toString(); // to convert it from number to string 
//     num = num.split(""); // split() method is to convert string into an Array
//     num = num.reverse(); // reverse method is to reverse the array members 
//     num = num.join(""); // join is for joins all elements of an array into a string
//     num = parseInt(num);
//     console.log(num);
//     console.log(typeof(num));
// }
// Rev_Num(2487234);


//Task2-----
// function Sort_str(str) {
//     str = str.split(""); // split() method is to convert string into an Array
//     str = str.sort(); // sort method is to sort the string of array into alphabetical order
//     str = str.join(""); // join is for joins all elements of an array into a string
//     console.log(str);
// }
// Sort_str("hello dear");

//Task3-----not done 

function Uper_str(str) {
    if (typeof(str) == "string") {
        arr = str.split("");
        for (var i = 0; i <= str.length; i++) {
            if (arr[i] === " ") {
                arr[i + 1] = [A - Z];
                console.log(arr[i + 1]);
            }
        }
    } else {
        console.log("not an string");
    }

}
Uper_str("hello mir fahad");

//Task4----
// function Vovel_count(str) {
//     arr = str.split(""); // split() method is to convert string into an Array
//     var count = 0; //Initializing counter 
//     for (var i = 0; i <= str.length; i++) { // running loop till the length of string
//         if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u' ||
//             arr[i] == 'A' || arr[i] == 'E' || arr[i] == 'I' || arr[i] == 'O' || arr[i] == 'U') { //checking weather Vowel is availabe or nor
//             count++;
//         }
//     }
//     console.log(count);
// }
// Vovel_count("pakistAni");