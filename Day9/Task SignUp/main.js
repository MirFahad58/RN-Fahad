// let loginObj = [];

// loginObj.push({ "usnername": "sumair", "password": "1234" });
// loginObj.push({ "usnername": "sumair1", "password": "1234" });
// loginObj.push({ "usnername": "sumair2", "password": "1234" });
// loginObj.push({ "usnername": "sumair3", "password": "1234" });

// loginObj.forEach(function(item) {
//     if (item.usnername !== "sumair1") {
//         console.log("username does not exist");
//     } else {
//         if (item.password === "1234") {
//             console.log("Password is correct");
//         } else {
//             console.log("password incorrect");
//         }
//     }
// })
// if(localStorage.counter===undefined){
//     localStorage.setItem('users',JSON.stringify(user));
//     localStorage.setItem('menus',JSON.stringify(menu));
//     localStorage.setItem('stds',JSON.stringify(student));
//     localStorage.setItem('ord',JSON.stringify(order));
//     count=1;
//     localStorage.setItem('counter',JSON.stringify(count));
//    }





//    //signup
//    let loginobj=[];
//    function signup(){
//      element={};
//      name=document.getElementById('name').value;
//      password=document.getElementById('pass').value;
//      element.name=name;
//      element.password=password;
//      loginobj.push(element);
//      localStorage.setItem('loginInfo',JSON.stringify(loginobj));
//      document.getElementById('name').value='';
//      document.getElementById('pass').value='';
//      alert("Signup successful");
//    } 


// localStorage.setItem('loginInfo', JSON.stringify(SignUpObj));
// let SignUpObj = [];

// function SignUp1() {
//     data = {};
//     let username1 = document.getElementById("username").value;
//     let password1 = document.getElementById("password").value;
//     data.username = username1;
//     data.password = password1;
//     SignUpObj.push(data);
//     localStorage.setItem('hello', JSON.stringify(SignUpObj));
//     alert("you are now SignUp");
// }
// document.getElementById('username').value = '';
// document.getElementById('password').value = '';

// function LogIn() {
//     let username2 = document.getElementById("username1").value;
//     let password2 = document.getElementById("password1").value;
//     let data = JSON.parse(localStorage.getItem(username2));
//     console.log(data);
//     if (data != null) {
//         if (data[0].username === username2 && data[0].password === password2) {
//             alert('You are Loged In')
//         } else {
//             if (password2 === "") {
//                 alert('Please enter your password');
//             } else {
//                 alert('failed');
//             }
//         }
//     } else {
//         alert('user does not exist ');
//     }

// }