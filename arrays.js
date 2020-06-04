var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  addBeginArray = [element, ... array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  addEndArray = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}

function accessElementInArray(array, index) {
  console.log(array[index])
}
