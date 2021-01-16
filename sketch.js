let startTime;
let numToSquare = 43210;

// function setup() {
//     createCanvas(400, 400);
//     background(220);
//     noCanvas();
// }

// function draw() {
//     background(220);
// }


function squNumNormal(num) {
    let squ = 0
    for (let i = 0; i < num; i++) {
        for (let k = 0; k < num; k++) {
            squ++;
        }
    }
    return squ;
}

for (i = 0; i < 5; i++) {
    startTime = new Date();
    console.log("Normal", numToSquare, squNumNormal(numToSquare), new Date() - startTime);
}
console.log("");


let prevNums = [];

function squNumCache(num) {
    if (prevNums[num] != null) {
        return prevNums[num];
    }
    let squ = 0
    for (let i = 0; i < num; i++) {
        for (let k = 0; k < num; k++) {
            squ++;
        }
    }
    prevNums[num] = squ;
    return squ;
}

for (i = 0; i < 5; i++) {
    startTime = new Date();
    console.log("Cache", numToSquare, squNumCache(numToSquare), new Date() - startTime);
}
console.log("");