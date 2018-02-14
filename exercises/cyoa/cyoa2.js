// alert ('Hello World')
//  var response = prompt("You are walking down the side walk by a bank, when you see a bag of money. Type 'walk' To keep walking on past, type 'pick up' to pick up the bag");
//
//   if(response === "walk"){
//     response = prompt("You see an officer of the law. Type 'report' to report the bag to the officer. Type 'move' to continue on your way.");
//   }
//   if (response === "report"){response =
// "Today is your lucky day."
//   }else if (response === "pick up") {
//       response = prompt("Type 'in'to take the bag in the bank.");
//       if (response === "in")
//     } else if (response === "move") {"The officer gives you a new set of braclets."};
//   } else {alert ("you were eaten by the monster")}
  var response = prompt("You are walking down the side walk by a bank, when you see a bag of money. Type 'walk' To keep walking on past, type 'pick up' to pick up the bag");

   if(response === "walk"){
     response = prompt("You see an officer of the law. Type 'report' to report the bag to the officer. Type 'move' to continue on your way.");
   // } else if (response === "report"){
   //   response = prompt("Today is your lucky day.");
   } else if (response === "pick up") {
       response = prompt("Type 'in'to take the bag in the bank.");
   } else (response === "in") {
       response = prompt("You get shot in the kneecap.");
     }
     } else if (response === "move") {
       response = prompt("The officer gives you a new set of braclets.");
   }
   else {
     alert("you were eaten by the monster");
  }
