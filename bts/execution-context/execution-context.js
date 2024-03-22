// CHECK THE README FILE

// 1 var x = 100
// 2  var y = 50
// 3  function getSum(n1, n2) {
// 4    var sum = n1 + n2
// 5    return sum
// 6  }
// 7  var sum1 = getSum(x, y)
// 8  var sum2 = getSum(10, 5)

/*
---------------------------------------------------------------------------------------------------------
* in line 1, var is allocated in the memory global execution context and the value is set to undefined, 
* same as y in line 2, the stuffs will allocate the getsum function skip others line 7 and set the values of sum1 in line 7 to undefined as well aa line 8

* the stuffs will come again to set the values of the actually variables, now x on line 1 is 100 as well as the rest
---------------------------------------------------------------------------------------------------------
*/
