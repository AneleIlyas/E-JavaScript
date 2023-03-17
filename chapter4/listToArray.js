let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: {
                value: 8,
                rest: null,
            }
        }
    }
}
let emptyList = {}

console.log(listToArray(list));
console.log(listToArray(emptyList));

function listToArray (list) {
    let arr = [];
    let temp = list;

    while (temp.value) {
        arr.push(temp.value);
        temp = temp.rest;
        if (!temp) break;
    }
    return arr;
}