  console.log('character generator prototype');

  /*
  Roll dice
  Point allocation
    str
    dex
    con
    int
    wis
    cha
  Display stats on screen
  Re-roll when button pressed
  */

  //Math.random();
  //parseInt();

  var player = {
    str: 5,
    dex: 5,
    con: 5,
    int: 5,
    wis: 5,
    cha: 5,
  }

  for (var i = 0;i < 6; i++) {
    console.log(parseInt(Math.random() * 6) + 1);
  }

  function rollDice(nDice, nSides, modifier = 0) {
    var count = 0;

    for (var i = 0; i < nDice; i++) {
      count += (parseInt(Math.random() * nSides) + 1) + modifier;
    }

    return count;
  }

  function addStat(stat) {
    stat += 1;
    return stat;
  }

  function subtractStat(stat) {
    stat -= 1;
    return stat;
  }

  console.log(addStat(4))
  console.log(rollDice(3, 6, 1));


  $(document).ready(function() {

    $("#str").text(player.str);

    $("#buttonD20").click(function() {
      //alert("Handler for .click() called.");
      $("#roll20").text(rollDice(1,20,0));
    });

    $("#buttonD6").click(function() {
      $("#roll6").text(rollDice(1,6,0));
    });

    $("#buttonAddStrength").click(function() {
      var $str = $("#str");
      var value = parseInt($str.text());
      $("#str").text(addStat(value));
    });

    $("#buttonSubtractStrength").click(function() {
      var $str = $("#str");
      var value = parseInt($str.text());
      $("#str").text(subtractStat(value));
    });



  });
