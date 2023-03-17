let arr = [9, 8, 7, 6];
console.log(reverseArray([1,2,3]));
reverseInPlace(arr);
console.log(arr);

function reverseArray(arr) {
    let newArr = [];
    for(let i of arr){
        newArr.unshift(i);
    }
    return newArr;
}

function reverseInPlace(arr) {
    let temp = []
    for(; arr.length;) {
        temp.push(arr.pop())
    }
    for(let i of temp) arr.push(i);
}