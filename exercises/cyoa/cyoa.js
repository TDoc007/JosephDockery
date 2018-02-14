// alert ('Hello World')
var response = prompt("You are walking down the side walk by a bank, when you see a bag of money. Type 'walk' to keep walking past, type 'pick up' to pick up the bag.")

if(response === "walk"){

    response = prompt("You see an officer of the law. Type 'report' to report the bag to the officer. type 'move' to continue on your way.");

} else if (response === "pick up"){
    response = prompt("Type 'in' to take the bag in the bank. Type 'go' to on with the bag.");}

    if(response === "report"){

      alert("Have good day");
}

  else if(response === "go"){ alert("You win a free pair of braclets from the officer standing on the corner.")
}

if (response === "move"){alert("You live a boring life.");

} else if (response === "in"){

  alert("Today is your lucky day. You're rewarded 5% of the money.")

}


 else {

    alert("Please type a valid response! Refresh the page to try again.")

}





// else if (response === "pickup"){
//
// response = prompt("Type 'in'to take the bag in the bank.");
// }
//
// if (response === "report"){"You have a good day."};
//
// else {
//
//   alert("Please type in a valid input! Refresh page to try again.");
// }
 // var response = prompt("You are walking down the side walk by a bank, when you see a bag of money. Type 'walk' To keep walking on past, type 'pick up' to pick up the bag");
 //
 // if(response === "walk"){
 //   response = prompt("You see an officer of the law. Type 'report' to report the bag to the officer. Type 'move' to continue on your way.");
 //   //    response = prompt("Today is your lucky day.");
 // } else if (response === "move") {
 //      response = prompt("Today is your lucky day");
 //  } else (response === "in") {
 //      response = prompt("You get shot in the kneecap.");
 //    }
 //    } else if (response === "move") {
 //      response = prompt("The officer gives you a new set of braclets.");
 //  }
 //  else {
 //    alert("you were eaten by the monster");
