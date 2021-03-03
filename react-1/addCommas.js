function addCommas(n) {
    let arr =[];
    let negative = false;
    if (String(n)[0] === '-') {
        negative = true;
        arr = [...String(n)];
        arr.shift();
        arr.reverse();
    }
    else {
        arr = [...String(n)];
        arr.reverse();
    }
    let out = arr.map((e,i)=>{
        if (i % 3 === 0) {
            return e + ','
        }
        return e
    })
    if (negative === true) {
        out.reverse().unshift('-');
        return out.join("").slice(0,-1)
    }
    return out.reverse().join("").slice(0,-1)
}

module.exports = addCommas;
