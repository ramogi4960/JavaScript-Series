function mat(n) {
    let pattern = ".|."; fillers = (n*3 - 3)/2; s = '';
    for (let i = 0; i < fillers; i ++) {
        s += "-";
    }

    for (let i = 0; i < n; i ++) {
        if (i < Math.round(n/2) - 1) {
            console.log(s + pattern + s);
            s = s.replace('---', '');
            pattern += ".|..|.";
        }
        else if (i === Math.round(n/2) - 1) {
            // first create fillers
            let another_s = '';
            for (let r = 0; r < Math.round(n*3 - 7)/2; r++) {
                another_s += '-';
            }
            console.log( another_s + "WELCOME" + another_s);
            s += "---";
            pattern = pattern.replace(".|..|.", '');
        }
        else {
            console.log(s + pattern + s);
            s += "---";
            pattern = pattern.replace(".|..|.", '');
        }
    }
}

