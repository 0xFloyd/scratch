function quickSort(unsortedArray) {
  if (unsortedArray <= 1) {
    return unsortedArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = unsortedArray.pop(); //Remove the last element of an array:
    var length = unsortedArray.length;

    for (var i = 0; i < length; i++) {
      if (unsortedArray[i] <= pivot) {
        left.push(unsortedArray[i]);
        console.log("left: " + left);
      } else {
        right.push(unsortedArray[i]);
        console.log("Right: " + right);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

var myArray = [1, 4, 6, 4, 4, 7, 3, 8, 3, 1, 9, 7, 4];

console.log("Original Array: " + myArray);
var sortedArray = quickSort(myArray);
console.log("Sorted Array: " + sortedArray);
