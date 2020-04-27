// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
    // Write your code here
    a.sort();
    b.sort();

    const maxA = b[0];
    let factors = [];
    for (let x = 0; x < a.length; x++) {
        let thisA = a[x];
        let thisFactors = [];
        while (thisA <= maxA) {
            thisFactors.push(thisA);
            thisA += a[x];
        }
        factors.push(thisFactors);
    }
    //console.log(factors);

    let intersect = factors.reduce(
        (intersect, cur) => intersect.filter(
            x => cur.includes(x)
        ) );

    //console.log(intersect);

    let numsBetween = intersect.filter( x => {
        let isFactorOfAll = true;
        for (let y = 0; y < b.length; y++) {
            if (b[y] % x !== 0) {
                isFactorOfAll = false;
            }
        }
        return isFactorOfAll;
    });

    console.log(numsBetween.length);

    return numsBetween.length;
}

getTotalX([2,4], [16, 32, 96]);
getTotalX([3,4], [24, 48]);