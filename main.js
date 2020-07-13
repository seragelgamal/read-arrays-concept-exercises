// q2
function arrayInfo(anArray) {
    console.log('Length of Array: ' + anArray.length);
    console.log('First Element: ' + anArray[0]);
    console.log('Last Element: ' + anArray[anArray.length - 1]);
}

// q3
function printNegatives(anArray) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] < 0) {
            console.log(anArray[i]);
        }
    }
}

// q4
function countHonours(anArray) {
    let numberOfHonours = 0;
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] >= 80) {
            numberOfHonours++;
        }
    }
    return numberOfHonours;
}

// q5
function arraySum(anArray) {
    let sum = 0;
    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i];
    }
    return sum;
}