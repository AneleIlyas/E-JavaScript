console.log(range(1,10, 1));

function range(start, end, step = 1) {
    let arr = [];
    if (step === 0) return arr;
    for(let i = start; step < 0 ? i >= end : i <= end; i += step) {
        arr.push(i)
    }
    return arr;
}

function sum(arr) {
    let result = 0;
    for(let i of arr) result += i;
    return result;
}