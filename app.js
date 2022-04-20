
//Multi-dimentional array
const array = [['Hello'], ['World']];



//Nesting For Loops
function newArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
console.log(newArray([[10, 20], [30, 40], [50, 60]]));





//numbers Comparison
function largestNum(a, b) {
    if (a > b) {
        return a + ' is the larger number';
    } if (a == b) {
        return "They are equal";
    }
    else {
        return b + " is the larger number";
    }
}
console.log(largestNum(99, 80));





//Repeated arguments filtering
function myArr(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + b;
    }
}
console.log(myArr('Welcome ', 'to'));
console.log(myArr('Hell', 'Hell'));



