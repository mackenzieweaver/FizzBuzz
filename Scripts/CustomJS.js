// Palindrome
function Palindrome(word) {
    // Get elements from DOM
    const c = document.getElementById("case-sensitive").checked;
    const n = document.getElementById("number-sensitive").checked;
    const s = document.getElementById("special-char-sensitive").checked;
    const e = document.getElementById("palindrome-result");
    const r = document.getElementById("reversed-word");
    // If the case-sensitive checkbox is checked
    if (c) {
        // set the word to lowercase
        word = word.toLowerCase();
    }
    // If the number-sensitive checkbox is checked
    if (n) {
        // remove the numbers
        word = word.replace(/[0-9]/g, '');
    }
    // If the special character checkbox is checked
    if (s) {
        // remove the special characters
        word = word.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]|\s/gi, '');
    }
    // If there is no word input
    if (!word) {
        // put n/a in the result box
        e.innerHTML = `<b>n/a</b>`;
        // alert the user
        swal("You made Taco Cat sad", "Because you didn't enter a word", "error");
        return;
    }
    // If we get to this point we reverse the word
    let reverse = word.split('').reverse().join('');
    // output the reversed word
    r.innerHTML = `<b>${reverse}</b>`;
    // Check if it's a palindrome and output answer
    if (word == reverse) {
        e.innerHTML = `<b>Palindrome!</b>`;
    } else {
        e.innerHTML = `<b>Not a palindrome...</b>`;
    }
}
// Clear Button
function ClearPalindrome() {
    document.getElementById("user-palindrome").value = '';
    document.getElementById("palindrome-result").innerHTML = '';
    document.getElementById("reversed-word").innerHTML = '';
    document.getElementById("case-sensitive").checked = false;
    document.getElementById("number-sensitive").checked = false;;
    document.getElementById("special-char-sensitive").checked = false;
    document.getElementById("user-palindrome").focus();
}

function CheckAll() {
    if (document.getElementById("check-all").checked) {
        document.getElementById("case-sensitive").checked = true;
        document.getElementById("number-sensitive").checked = true;;
        document.getElementById("special-char-sensitive").checked = true;
    } else {
        document.getElementById("case-sensitive").checked = false;
        document.getElementById("number-sensitive").checked = false;;
        document.getElementById("special-char-sensitive").checked = false;
    }
}