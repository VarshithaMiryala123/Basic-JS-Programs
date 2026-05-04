 //count of vowels
 function word(name) {
    let vowels = 'AEIOUaeiou';
    let cnt = 0;
    for(let char of name) {
        if (vowels.includes(char)) {
            cnt++;
        }
    }
    return cnt;
 }
 console.log(word("Varshitha Miryala"));

