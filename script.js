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

  var str_stat = 5;

  for (var i = 0;i < 6; i++) {
    console.log(parseInt(Math.random() * 6) + 1);
  }

  function rollDice(nDice, nSides, modifier) {
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

  console.log(addStat(4))
  console.log(rollDice(3, 6, 1));
