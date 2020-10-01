setA = [1, 2, 3, 4, 5, 6, 44];
setB = [4, 5, 3, 8, 9, 24, 44]

Membershift(setA, 5);
Intersection(setA, setB);
Union(setA, setB)
Difference(setA, setB)


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
    console.log('setA ∩ setB =', SetRes);
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
    console.log('setA ∪ setB =', SetRes);

}

function Difference(setA, setB) {
    let res = [];
    setA.forEach(value => {
        if (setA.includes(value) == true && setB.includes(value) == false) {
            res.push(value);
        }
    });
    let SetRes = new Set(res.map(item => item));
    console.log('setA - setB =', SetRes);
}