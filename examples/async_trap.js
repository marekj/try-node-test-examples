// async trap. notice Final result does not include the operations inside setTimeout. Those occur after.
// js is not executed in sequence

arr = [1, 2, 3]
result = [0]

setTimeout(function () {
    for (var i = 0; i < arr.length; i++) {
        console.log("iterating: " + arr[i])
        result.push(arr[i])
        console.log("Result value: " + result)
    }
}, 1000)

console.log("Final Result: " + result)
console.log("Finished")

/*

 Final Result: 0
 Finished
 iterating: 1
 Result value: 0,1
 iterating: 2
 Result value: 0,1,2
 iterating: 3
 Result value: 0,1,2,3

 */