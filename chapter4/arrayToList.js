let arr = [1, 2, 3];

console.log(arrayToList(arr));

function arrayToList (arr) {
    let list = {
        value: arr[0],
        rest: null
    }
    let temp = list;
    for(let i = 1; i < arr.length; i++) {
        temp.rest = {
            value: arr[i],
            rest: null
        }
        temp = temp.rest;
    }
    return list;
}