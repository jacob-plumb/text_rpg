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

  var pointPool = 4;

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


  console.log(rollDice(3, 6, 1));


  $(document).ready(function() {

    $("#points").text(pointPool);
    $("#str").text(player.str);
    $("#dex").text(player.dex);
    $("#con").text(player.dex);

    $("#buttonD20").click(function() {
      //alert("Handler for .click() called.");
      $("#roll20").text(rollDice(1,20,0));
    });

    $("#buttonD6").click(function() {
      $("#roll6").text(rollDice(1,6,0));
    });

    $("#buttonAddStr").click(function() {
      if (player.str + 1 < 11 && pointPool > 0) {
        player.str += 1;
        pointPool -= 1;
        $("#str").text(player.str);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractStr").click(function() {
      if (player.str - 1 > 0) {
        player.str -= 1;
        pointPool += 1;
        $("#str").text(player.str);
        $("#points").text(pointPool);
      }
    });

    $("#buttonAddDex").click(function() {
      if (player.dex + 1 < 11 && pointPool > 0) {
        player.dex += 1;
        pointPool -= 1;
        $("#dex").text(player.dex);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractDex").click(function() {
      if (player.dex - 1 > 0) {
        player.dex -= 1;
        pointPool += 1;
        $("#dex").text(player.dex);
        $("#points").text(pointPool);
      }
    });

    $("#buttonAddCon").click(function() {
      if (player.con + 1 < 11 && pointPool > 0) {
        player.con += 1;
        pointPool -= 1;
        $("#con").text(player.con);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractCon").click(function() {
      if (player.con - 1 > 0) {
        player.con -= 1;
        pointPool += 1;
        $("#con").text(player.con);
        $("#points").text(pointPool);
      }
    });



  });
