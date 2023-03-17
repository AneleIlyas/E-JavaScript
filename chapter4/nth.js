let list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
let searchPos = -1;
console.log(nth(searchPos, list));

function nth(searchPos, list) {
    let temp = list;
    let searchValue;
    
    while(searchPos > 0 && temp)
    {
        temp = temp.rest;
        searchPos--;
    }
    if (searchPos < 0) return undefined;
    searchValue = temp ? temp.value : undefined;
    return searchValue;
}