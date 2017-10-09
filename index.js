// Code your solution in this file
function findMatching(drivers, name) {
  const arr = []
  for (const person of drivers) {
    if (person.toLowerCase() === name.toLowerCase()) {
      arr.push (person)
    }
  }
  return arr
}

function fuzzyMatch(drivers, letters) {
  const arr = []
  for (const person of drivers) {
    if (person.toLowerCase().startsWith(letters.toLowerCase())) {
      arr.push(person)
    }
  }
  return arr
}

function matchName(drivers, name) {
  const arr = []
  for (const person of drivers) {
    if (person['name'] === name) {
      arr.push(person)
    }
  }
  return arr
}
