var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//return a new array and not modify the original.
function addElementToBeginningOfArray(array, element) {
  addBeginArray = [element, ... array]
}

//alter the original array that's passed in
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  console.log(array)
}

//should not alter the original array
function addElementToEndOfArray(array, element) {
  addEndArray = [...array, element]
}

//should alter the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
}

function accessElementInArray(array, index) {
  console.log(array[index])
}
