var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  addArray = [element, ... array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
