let SignUpObj = [];

function SignUp1() {
    let check = false;
    SignUpObj = JSON.parse(localStorage.hello);
    SignUpObj.forEach(function(item) {
        if (item.username === document.getElementById('username').value) {
            alert(item.username + "  is already exist");
            check = true;
            return;

        }
    });
    if (!check) {
        data = {};
        let username1 = document.getElementById("username").value;
        let password1 = document.getElementById("password").value;
        data.username = username1;
        data.password = password1;
        SignUpObj.push(data);
        localStorage.setItem('hello', JSON.stringify(SignUpObj));
        alert("you are now SignUp");
    }
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function LogIn() {
    SignUpObj = JSON.parse(localStorage.hello);
    SignUpObj.forEach(function(item) {
        if (item.username !== document.getElementById('username2').value) {
            console.log("");
            return;
        } else {
            if (item.password === document.getElementById('password2').value) {
                alert("Login Successful");
            } else {
                alert("User Name or Password does not match");
            }
        }
    });
}