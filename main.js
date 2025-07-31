const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function chek() {
    const value = input.value;
    // alert(value) pops out a message on screen the word we put in our input
    const reverse = reverseString(value)
    // alert(reverse) returns the reversed value
    if (value == reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not today!")
    }
    input.value = "" //clear the input box after we click bottom

}