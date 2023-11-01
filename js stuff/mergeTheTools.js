function merge(s, k) {
    let word = '';
    for (let i = 0; i < s.length; i += k) {
        let n = i;
        while (n < n + k) {
            if (s.indexOf(s[i]) !== -1) {
                word += s[i];
            }
            n ++;
        }
        console.log(word);
        word = '';

    }
}

merge('AABCAAADA', 3);