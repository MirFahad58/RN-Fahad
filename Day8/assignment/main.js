let SignUpObj = [];

function handler(e) {
    // remove this handler
    e.target.removeEventListener(e.type, arguments.callee);
    data = {};
    data.username = 'admin';
    data.password = 'admin';
    SignUpObj.push(data);
    localStorage.setItem('hello', JSON.stringify(SignUpObj));
}

function ChangePrice() { //Changing Price HTML
    document.getElementById('change').innerHTML = '';
    document.getElementById('change').innerHTML = '<h4>To Change The price </h4><br><input type="text" id="itemname1" placeholder="Item Name" required><br><br><input type="number" id="number1" min="1" placeholder="Enter Price" required><br><br><input type="submit" id="b2" class="btn btn-sm btn-success" onclick="ChangePriceA()" value="Change">';
}

function ChangePriceA() { //Changing Price JavaScript 
    let IName1 = document.getElementById('itemname1').value;
    let INPrice = document.getElementById('number1').value;
    var fastfood = JSON.parse(localStorage.fastfood);
    for (var i = 0; i < fastfood.length; i++) {
        if (IName1 == fastfood[i].name) { //look for match with name
            fastfood[i].price = parseInt(INPrice); //equal to it
            localStorage.setItem('fastfood', JSON.stringify(fastfood));
            alert("ok");
            break; //exit loop since you found the person
        } else {
            alert("not found")
        }
    }
}

function SignUp1() {
    if (document.getElementById('username').value == '' || document.getElementById('password').value == '') {
        alert("please put some value");
    } else {

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
            alert("Member is added");
        }
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

function LogIn() {

    SignUpObj = JSON.parse(localStorage.hello);
    SignUpObj.forEach(function(item) {
        if (item.username !== document.getElementById('username2').value) {
            console.log("");
            return;
        } else {
            if (document.getElementById('username2').value == "admin") {
                if (item.password === document.getElementById('password2').value) {
                    window.location.href = "AdminIndex.html";
                } else {
                    alert("User Name or Password does not match");
                }
            } else {
                if (item.password === document.getElementById('password2').value) {
                    window.location.href = "index.html";
                } else {
                    alert("User Name or Password does not match");
                }
            }
        }
    });
}

let i = 1;
let i2 = 1.10;
let i3 = 2.30;

let Item_Names_Arr = [];

function addOrder() {

    FastFoodAndTea = JSON.parse(localStorage.fastfood);
    FastFoodAndTea.forEach(function(item) {
        Item_Names_Arr.push(item.name);
    });
    let options;
    for (let loopc = 0; loopc < Item_Names_Arr.length; loopc++) {
        options += '<option value="' + Item_Names_Arr[loopc] + '"></option>'
    }
    document.getElementById("add").innerHTML += ' <div id=' + i + '><input list="items1" name="items" placeholder="Select item" class="items" id=' + i2 + ' onchange="item(this.id)" required><datalist id="items1">"' + options + '" </datalist><input type="number" min="1" placeholder="quantity" class="quantity" onchange="number(this.id)" id=' + i3 + ' required>    <button type="button"  onclick="cancelP(this.id)" id=' + i + ' class="btn btn-danger">Cancel This <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></div> <br> '
    document.getElementById("post").innerHTML = '<button type="Button" class="btn btn-info" onclick="Fullcancel()">Cancel order-<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button><button  type="Button" class="btn btn-danger" onclick="Confrim()">Confrim order-<span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span></button>'
        //<option value="Mini Zinger Burger"></option><option value="Chatni Roll"></option> <option value="Mayo Roll"></option><option value="Chicken Tika"></option> <option value="French Fries"></option> <option value="Full Tea"></option><option value="Half Tea"></option><option value="Biscut"></option>
    i++;
    i2++;
    i3++;

}

function Fullcancel() {
    Item_Names_Arr = [];
    document.getElementById("add").innerHTML = '';
    document.getElementById("post").innerHTML = '';
    document.getElementById('side3').innerHTML = '';
    document.getElementById('side2').innerHTML = '';
    document.getElementById('side4').innerHTML = '';
    document.getElementById('customer').value = '';
    i = 1;
    i2 = 1.10;
    i3 = 2.30;
    arr_items = [];
    arr_quan = [];
    showP();
}

function cancelP(id) {
    Item_Names_Arr = [];
    document.getElementById(id).innerHTML = '';
    arr_items.splice(id - 1, 1);
    i--;
    i2--;
    i3--;
}

var arr_items = [];
var arr_quan = [];

function Cus() {
    document.getElementById('customer').setAttribute('value', document.getElementById('customer').value);
}

function item(id) {
    arr_items.push(document.getElementById(id).value);
    document.getElementById(id).setAttribute('value', document.getElementById(id).value);
}

function number(id) {
    document.getElementById(id).setAttribute('value', document.getElementById(id).value);
    arr_quan.push(document.getElementById(id).value);
}



let Orders = [];

function Confrim() {
    let Total = 0;
    let Total_arr = [];
    let mul;
    document.getElementById('side2').innerHTML = '';
    for (let loop1 = 0; loop1 < arr_items.length; loop1++) {
        document.getElementById('side2').innerHTML += '<span id="span1">' + arr_items[loop1] + '</span>-----<span id="span2">' + arr_quan[loop1] + '</span><br>';
        FastFoodAndTea = JSON.parse(localStorage.fastfood);
        FastFoodAndTea.forEach(function(item) {
            if (item.name == arr_items[loop1]) {
                mul = parseInt(arr_quan[loop1]) * parseInt(item.price);
                Total_arr.push(mul);
            }
        });
    }
    for (let loop2 = 0; loop2 < Total_arr.length; loop2++) {
        Total = Total + Total_arr[loop2];
    }
    document.getElementById('side3').innerHTML = '<span id="span1"> Customer Name:' + document.getElementById('customer').value + '</span><br><span id="span1">Your Total Bill Is----' + Total + '</span><br><br>'
    let check = false;
    Orders = JSON.parse(localStorage.allorders);
    Orders.forEach(function(item) {
        if (item.TRupies == document.getElementById('customer').value) {
            console.log("");
            check = true;
            return;
        }
    });
    if (!check) {
        data3 = {};
        data3.Cname = document.getElementById('customer').value;
        data3.TRupies = Total;
        Orders.push(data3);
        localStorage.setItem('allorders', JSON.stringify(Orders));
    }
}


function addmembers() {
    document.getElementById('change').innerHTML = '<form onsubmit="return false"><h4>Add Members</h4><input type="text" id="username" placeholder="User Name" required><br><br><input type="password" id="password" placeholder="Password" required><br><br><input type="submit" onclick="SignUp1()" class="btn  btn-success" value="Add Members"></form>'
}

function showMembers() {
    document.getElementById('change').innerHTML = '';
    SignUpObj = JSON.parse(localStorage.hello);
    SignUpObj.forEach(function(item) {
        for (let users = 1; users <= 1; users++) {
            document.getElementById('change').innerHTML += '<br><span> username:  ' + item.username + '</span> <span class="glyphicon glyphicon-minus"></span><span> password:  ' + item.password + '</span><br>'
        }
    })
}




function deleteMember() {
    document.getElementById('change').innerHTML = ''
    document.getElementById('change').innerHTML = '<span class="glyphicon glyphicon-user"></span><span class="glyphicon glyphicon-trash"></span><h4>To Delete the Member </h4><br><input type="text" id="username3" placeholder="User Name" required><br><br><input type="password" id="password3" placeholder="Password" required><br><br><input type="submit" id="b2" class="btn btn-sm btn-success" onclick="DeleteOne()" value="Delete">'
}

function DeleteOne() {
    if (document.getElementById('username3').value == '' || document.getElementById('password3').value == '') {
        alert("please put some value");
    } else {
        let c = 0;
        SignUpObj = JSON.parse(localStorage.hello);
        SignUpObj.forEach(function(item) {
            if (document.getElementById('username3').value !== 'admin' && item.username == document.getElementById('username3').value && item.password == document.getElementById('password3').value) {
                SignUpObj.splice(c, 1);
                localStorage.setItem('hello', JSON.stringify(SignUpObj));
                c++
            } else {
                alert("Did'nt Match or Member is not registerd");
                c++;
            }
        })
    }
}





var FastFoodAndTea = [];

function showP() {
    FastFoodAndTea = JSON.parse(localStorage.fastfood);
    FastFoodAndTea.forEach(function(item) {
        let IName = item.name;
        let Iprice = item.price;
        document.getElementById('side2').innerHTML += '<span id="span1">' + IName + '</span><span>-----</span><span id="span2">(' + Iprice + ')</span><br>'

    })
}
showP();

function AddItem() { //For Adding Item HTML
    document.getElementById('change').innerHTML = '';
    document.getElementById('change').innerHTML = '<h4>To Add The Item </h4><br><input type="text" id="itemname1" placeholder="Item Name" required><br><br><input type="number" id="number1" min="1" placeholder="Enter Price" required><br><br><input type="submit" id="b2" class="btn btn-sm btn-success" onclick="AddItem1()" value="ADD">';
}

function AddItem1() { //Also For adding Item But JavaScript
    if (document.getElementById('itemname1').value == '' || document.getElementById('number1').value == '') {
        alert("please put some value");
    } else {
        let check = false;
        FastFoodAndTea = JSON.parse(localStorage.fastfood);
        FastFoodAndTea.forEach(function(item) {
            if (item.name === document.getElementById('itemname1').value) {
                alert(item.name + "  is already exist");
                check = true;
                return;
            }
        });
        if (!check) {
            data = {};
            let Item1 = document.getElementById("itemname1").value;
            let Price1 = document.getElementById("number1").value;
            data.name = Item1;
            data.price = Price1;
            FastFoodAndTea.push(data);
            localStorage.setItem('fastfood', JSON.stringify(FastFoodAndTea));
            alert("Item is added");
        }
        document.getElementById('itemname1').value = '';
        document.getElementById('number1').value = '';
    }
}

function DeleteItem() { //To Delete Items HTML
    document.getElementById('change').innerHTML = '';
    document.getElementById('change').innerHTML = '<h4>To Delete The Item </h4><br><input type="text" id="itemname1" placeholder="Item Name" required><br><br><input type="submit" id="b2" class="btn btn-sm btn-success" onclick="DelItem1()" value="Delete">';

}

function DelItem1() { //To Delete Items Java Script
    let del = document.getElementById('itemname1').value;
    FastFoodAndTea = JSON.parse(localStorage.fastfood);
    FastFoodAndTea.forEach(function(item) {
        if (item.name == document.getElementById('itemname1').value) {

            alert("removed");
            return false;
        } else {
            alert('Item is Not Awailable')
        }
    });
}

function ShowOrders() {
    document.getElementById('change').innerHTML = '';
    Orders = JSON.parse(localStorage.allorders);
    Orders.forEach(function(item) {
        document.getElementById('change').innerHTML += '<span id="span1"> Customer Name---' + item.Cname + '</span><span id="span1"> Total Rupies---' + item.TRupies + '</span><br>'
    });
}