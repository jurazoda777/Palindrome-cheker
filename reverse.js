function splitString(str) {
    console.log(str.split(""))
}

splitString("hello")

function reverseString(str) {
    const arr = str.split("").reverse();
    console.log(arr);
}

reverseString("hello")

function joinString(str) {
    console.log(str.split("").reverse().join(""))
}
joinString("hello")