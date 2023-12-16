


function printData() {
    var qoutes = [
        "Do not take life too seriously. You will not get out alive.",
        "It's not what happens to you, but how you react to it that matters.",
        "Resentment is like drinking poison and waiting for your enemies to die.",
        "You miss 100% of the shots you don't take.",
        "The best revenge is massive success.",
      ];
      
      var names = [
        "--Elbert Hubbard",
        "--Epictetus",
        "--Nelson Mandela",
        "--Wayne Gretzy",
        "--Frank Sinatra",
      ];

   var num = Math.floor(Math.random() * qoutes.length);

  document.getElementById("p1").innerHTML = qoutes[num];
  document.getElementById("p2").innerHTML = names[num];


}


