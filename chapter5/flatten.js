let arr = [[1,2], [3,4], [33, 21]];

let flatArr = arr.reduce((acc, curr) => {
    return acc.concat(curr);
});

console.log(flatArr);