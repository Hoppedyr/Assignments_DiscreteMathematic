function Membershift(set, valeuToSeach) {
    res = set.includes(valeuToSeach);
    console.log(`value ${valeuToSeach} is a member of the set:`, res);
}

//and
function Intersection(setA, setB) {
    let res = [];
    setA.forEach(value => {
        if (setA.includes(value) && setB.includes(value)) {
            res.push(value);
        }
    });
    let SetRes = new Set(res.map(item => item));
    return SetRes;
}

//or
function Union(setA, setB) {
    let res = [];
    setA.forEach(value => {
        if (setA.includes(value) || setB.includes(value)) {
            res.push(value);
        }
    });
    setB.forEach(value => {
        if (setA.includes(value) || setB.includes(value)) {
            res.push(value);
        }
    });
    let SetRes = new Set(res.map(item => item));
    return SetRes;

}

module.exports = {
    Union,
    Intersection
 }


