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

  var pointPool = 21;

  var player = {
    str: 1,
    agi: 1,
    end: 1,
    int: 1,
    cha: 1,
    per: 1,
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
    $("#agi").text(player.agi);
    $("#end").text(player.end);
    $("#int").text(player.int);
    $("#cha").text(player.cha);
    $("#per").text(player.per);

    $("#buttonD20").click(function() {
      //alert("Handler for .click() called.");
      $("#roll20").text(rollDice(1,20,0));
    });

    $("#buttonD6").click(function() {
      $("#roll6").text(rollDice(1,6,0));
    });

    //STRENGTH
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

    //AGILITY
    $("#buttonAddAgi").click(function() {
      if (player.agi + 1 < 11 && pointPool > 0) {
        player.agi += 1;
        pointPool -= 1;
        $("#agi").text(player.agi);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractAgi").click(function() {
      if (player.agi - 1 > 0) {
        player.agi -= 1;
        pointPool += 1;
        $("#agi").text(player.agi);
        $("#points").text(pointPool);
      }
    });

    //ENDURANCE
    $("#buttonAddEnd").click(function() {
      if (player.end + 1 < 11 && pointPool > 0) {
        player.end += 1;
        pointPool -= 1;
        $("#end").text(player.end);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractEnd").click(function() {
      if (player.end - 1 > 0) {
        player.end -= 1;
        pointPool += 1;
        $("#end").text(player.end);
        $("#points").text(pointPool);
      }
    });

    //INTELLECT
    $("#buttonAddInt").click(function() {
      if (player.int + 1 < 11 && pointPool > 0) {
        player.int += 1;
        pointPool -= 1;
        $("#int").text(player.int);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractInt").click(function() {
      if (player.int - 1 > 0) {
        player.int -= 1;
        pointPool += 1;
        $("#int").text(player.int);
        $("#points").text(pointPool);
      }
    });

    //CHARISMA
    $("#buttonAddCha").click(function() {
      if (player.cha + 1 < 11 && pointPool > 0) {
        player.cha += 1;
        pointPool -= 1;
        $("#cha").text(player.cha);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractCha").click(function() {
      if (player.cha - 1 > 0) {
        player.cha -= 1;
        pointPool += 1;
        $("#cha").text(player.cha);
        $("#points").text(pointPool);
      }
    });

    //PERCEPTION
    $("#buttonAddPer").click(function() {
      if (player.per + 1 < 11 && pointPool > 0) {
        player.per += 1;
        pointPool -= 1;
        $("#per").text(player.per);
        $("#points").text(pointPool);
      }
    });

    $("#buttonSubtractPer").click(function() {
      if (player.per - 1 > 0) {
        player.per -= 1;
        pointPool += 1;
        $("#per").text(player.per);
        $("#points").text(pointPool);
      }
    });



  });
