console.log(countBs("lobottoughBBBB"));
console.log(countChar("ladyBirdB","B"));

function countBs(word) {
    return countChar(word, "B")
}

function countChar(word, char) {
    let result = 0;
    for(let i = 0; i < word.length; i++) 
        if (word[i] === char)
            result++;
    return result;
}