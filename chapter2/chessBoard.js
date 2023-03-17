let board = "", size = 8;

for(let i = 0, row = ""; i < size; i++) {
    for(let j = 0; j < size; j++) {
        if ((i+j) % 2 !== 0) row += "#";
        else row += " ";
    }
    board += row + "\n";
    row = "";
}
console.log(board);
