let list = {value: 1, rest: {value: 2, rest: null}};
let elem = 5;

console.log(prepend(elem, list));

function prepend(elem, list) {
    let nList = {
        value: elem,
        rest: null
    }
    let temp = list;
    let tempNList = nList;
    while(temp.value) {
        tempNList.rest = {
            value: temp.value,
            rest: null
        }
        tempNList = tempNList.rest;
        temp = temp.rest;
        if (!temp) break;
    }
    return nList;
}