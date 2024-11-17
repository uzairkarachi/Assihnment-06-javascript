// QNO1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var array = []
document.write(array)

// QNO2. Declare and initialize a multidimensional array 
// representing the following matrix:
var array = [[0,1,2,3], "</br>",[1,0,1,2],"</br>",[2,1,0,1] ,"</br>"]
document.write(array)


// QNO3. Write a program to print numeric counting from 1 to 10.
var array = [1,2,3,4,5,6,7,8,9,10]
document.write("<h1>" + array + "</h1>")



// QNO4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
var number = +prompt("Enter a number to print its multiplication table")
document.write("<h1>Multiplication table of " + number + "</h1>")
for (i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "</br>")
}


// QNO5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
document.write("<h1>Fruits</h1>")
for (i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "</br>")
}


// QNO6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("<h1>Counting</h1>")
for (i = 0; i < Counting.length; i++) {
  document.write(Counting[i] + "</br>")
}
var Reverse_counting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
document.write("<h1>Reverse Counting</h1>")
for (i = 0; i < Reverse_counting.length; i++) {
  document.write(Reverse_counting[i] + "</br>")
}
var Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
document.write("<h1>Even</h1>")
for (i = 0; i < Even.length; i++) {
  document.write(Even[i] + "</br>")
}
var Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
document.write("<h1>Odd</h1>")
for (i = 0; i < Odd.length; i++) {
  document.write(Odd[i] + "</br>")
}
var Series = [2+'k', 4+'k', 6+'k', 8+'k', 10+'k', 12+'k', 14+'k', 16+'k', 18+'k', 20+'k']
document.write("<h1>Series</h1>")
for (i = 0; i < Series.length; i++) {
  document.write(Series[i] + "</br>")
}



// QNO7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Enter the item you want to search")
var found = false
for (i = 0; i < A.length; i++) {
  if (input == A[i]) {
    found = true
    break
  }
}
if (found) {
  document.write("<h1>" + input  + " is found in the array" + "</h1>" + '</br>')
} else {
  document.write(input + " is not found in the array" + '</br>')
}



// QNO8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].
var array = [24,53,78,91,12]
var max = array[0]  
for (i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]
  }
}
document.write("The maximum value in the array is " + max + '</br>')





// QNO9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

var array = [24,53,78,91,12]
var min = array[0]
for (i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i]
  }
}
document.write("The minimum value in the array is " + min + '</br>')




// QNO10. Write a program to print multiples of 5 ranging 1 to 
// 100.

document.write("<h1>Multiples of 5 ranging 1 to 100</h1>")
for (i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(i + "</br>")
  }
}


