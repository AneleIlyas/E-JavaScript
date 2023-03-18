function loop(value, test, update, body) {
    for(; test(value); value = update(value)) {
        body(value);
    }
}

loop(12, v => v > 0, v => v -= 1, v => {
    console.log(v);
});

