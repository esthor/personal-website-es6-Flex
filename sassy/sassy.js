document.getElementById("sass").addEventListener("click", sassyFunction);

//Encapsulate all variables in a function
function sassyFunction() {
  let weight = 0;
//   weight = prompt(`What's your weight, big boy?`, `0`);
  weight = document.getElementById("weight").value;

  let sassyQuotes = [
    `${weight} pounds?! Really?`,
    `${weight}? Hey. Here's an idea: Why don't we lay off the marshmallows?`,
    `${weight} just can't be your real weight. You've really got to be kidding me.`,
    `${weight}. Wow. You've got issues to deal with, sister.`,
    `Remember. Mayonaisse is not your friend.`,
    `I'm not your driver's license. We can be honest here.`
  ];

  let selectedQuote =
    sassyQuotes[Math.floor(Math.random() * sassyQuotes.length)];

//   alert(selectedQuote);
document.getElementById("output").innerHTML = selectedQuote;
}



// TODO:
// If the weight is more than last time -> shaming comment; else if weight is less than last time -> sarcastic sassy supportive comment (requies user accounts)