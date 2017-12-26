let player_1 = 100; //Player one or user initial life
let player_2 = 100; //Player two or AI initial life
let promp; //for user input
let counter = 0; //counter for user kick 
let counter1 = 0; //counter for AI kick
function Play() {
    do {
        //for user or player1
        promp = prompt("");
        if (promp === "kick" && counter <= 2 && player_2 >= 1 && player_2 <= 100) {
            counter++;
            player_2 = player_2 - 15;
            if (player_2 === 0) {
                console.log("Player1 wins");
                break;
            }
            console.log("player2==" + player_2);
        } else if (promp === "punch" && player_2 <= 100 && player_2 >= 1) {
            player_2 = player_2 - 10;
            if (player_2 <= 0) {
                console.log("Player1 wins");
                break;
            }
            console.log("player2==" + player_2);
        } else {
            console.log("Player2==" + player_2);
        }
        //for AI or player2
        if (counter1 <= 2 && player_1 >= 1 && player_1 <= 100) {
            counter1++;
            player_1 = player_1 - 15;
            if (player_1 === 0) {
                console.log("Player2 wins");
                break;
            }
            console.log("player1==" + player_1);
        } else if (player_1 <= 100 && player_1 >= 1) {
            player_1 = player_1 - 10;
            if (player_1 <= 0) {
                console.log("Player2 wins");
                break;
            }
            console.log("player1==" + player_1);
        }
    }
    while (player_1 <= 100 || player_2 <= 100);
}

function ReFresh() {
    location.reload(true);
}