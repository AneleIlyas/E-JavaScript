console.log(deepEqual(true,false));
console.log(deepEqual('5',"5"));
console.log(deepEqual({a: "n", b: {mouse: 55}}, {a: "n", b: {mouse: 55}}));

function deepEqual(a, b) {
    if (typeof a !== typeof b) return false;
    if(typeof(a) !== 'object') return a === b;
    else if (a === null || b === null ) return a === b;
    else if (!(Object.keys(a).length === Object.keys(b).length)) return false;
    else
        {
            for(let a_key of Object.keys(a)) 
            {
                if (! (a_key in b)) return false;
            }
            for(let key of Object.keys(a))
            {
                if(!deepEqual(a[key], b[key])) return false;
            }
            return true;
        }
}
