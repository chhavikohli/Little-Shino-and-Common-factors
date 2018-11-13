
function ff(g) {

    let rr = parseInt(Math.sqrt(g));
    let fac = [];
    for(let i=1; i<= rr; i++) {
        if(g % i === 0) {
            fac.push(i);
            if(g / i !== i) fac.push(g/i);
        }
    }
    return fac;
}

exports.dd=function dd(f1, f2) {
    let small = f1 < f2 ? f1 : f2;
    let fAr = ff(small);
    let large = f1 > f2 ? f1 : f2;
    let j = 0;
    for(let i=0; i < fAr.length; i++) if(large % fAr[i] === 0) j++;
    return j;
}