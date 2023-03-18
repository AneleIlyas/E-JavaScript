console.log("loop version: ", every([12,2,32, 50], v => v % 2 === 0));
console.log("Some f version: ", everyUsingSome([12,2,32, 5], v => v % 2 === 0))
function every(arr, f) {
    for(let i of arr) {
        if (!f(i)) return false;
    }
    return true;
}

function everyUsingSome(arr, f) {
    if(arr.some(v => !f(v))) return false;
    return true;
}