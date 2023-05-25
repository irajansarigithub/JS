 function calculateSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        sum += array[i];
      }
    }
    return sum;
  }
  var numbers = [1, 2, 3, 4, 5];
  var result = calculateSum(numbers);
  console.log(result); 

v 
  function findLongestString(array) {
    var longestString = "";
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string' && array[i].length > longestString.length) {
        longestString = array[i];
      }
    }
    return longestString;
  }
  var strings = ["punjab", "karachi", "Islamabad", "Kashmir"];
  var longest = findLongestString(strings);
  console.log(longest); 



   function reverseArrayInPlace(array) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
  
    while (leftIndex < rightIndex) {
      var temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
  
      leftIndex++;
      rightIndex--;
    }
  
    return array;
  }
  var array = [1, 2, 3, 4, 5];
  console.log(reverseArrayInPlace(array)); 



  function filterEvenNumbers(array) {
    var evenNumbers = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        evenNumbers.push(array[i]);
      }
    }
    return evenNumbers;
  }
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers); 



  function containsElement(array, element) {
    return array.includes(element);
  }
  var numbers = [1, 2, 3, 4, 5];
  console.log(containsElement(numbers, 3)); 
  console.log(containsElement(numbers, 6)); 