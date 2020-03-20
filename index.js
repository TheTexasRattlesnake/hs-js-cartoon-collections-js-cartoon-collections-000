function dwarfRollCall(dwarves) {
  var array = []
  var num = 0
  for (num = 0; num < dwarves.length; num++) {
    array.push(`${num+1}. ${dwarves[num]}`)
  }
  return array.toString().replace(/,/g, ' ')
}

function summonCaptainPlanet(planeteerCalls) {
   var array = []
  for (var i=0;i<planeteerCalls.length;i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return array
}

function longPlaneteerCalls(words) {
  for (var i=0;i<words.length;i++) {
    if (words[i].length > 4) {
      return true
    } else {
      return false
    }
  }
}

function findTheCheese (foods) {
  var cheese = ['camembert','gouda','cheddar']
  for (var i=0;i<foods.length;i++) {
    if (cheese.indexOf(foods[i]) > -1) {
      return foods[i];
      }
  }
  return 'no cheese!'
}
