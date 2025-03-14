function isSameType(value1, value2) {
    const isNaN1 = Number.isNaN(Number(value1));
    const isNaN2 = Number.isNaN(Number(value2));
    if (isNaN1 && isNaN2) return true;
    if (isNaN1 || isNaN2) return false;
    return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End of the Range.");
alert(isSameType(value1, value2));
