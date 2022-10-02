// Happy Hacktoberfest 2022 🎃

function hacktoberfest_shirt() {
  var question = prompt("Have you submitted 4 PR requests?");
  if (question === "Yes" && "yes") {
    console.log("Congrats! You're eligible for a Hacktoberfest T-Shirt! 🎃");
  } else {
    console.log("You  need to submit 4 PR requests to be eligible.")
  }
}

hacktoberfest_shirt();
