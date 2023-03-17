let list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
let searchPos = -3;

console.log(rNth(searchPos, list));

function rNth(searchPos, list) {
    if (!list) return undefined;
    else if (!searchPos) return list.value;
    else
        return rNth(searchPos-=1, list.rest);
}