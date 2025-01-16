const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("You quit");
        break;
    }

    if(guess == random){
        console.log("Congrats, Your guess was right.!");
        break;
    }
    else{
        guess = prompt("Your Guess was wrong, try again");
    }
}