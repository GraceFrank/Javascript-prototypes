//hasVowel
String.prototype.hasVowel = function hasVowel() {
    return /[aeiou]/.test(this);
}

//toUpper
String.prototype.toUpper = function () {
    let capitalizedString = '';

    for (let i = 0; i < this.length; i++) {

        if (/[a-z]/.test(this[i])) {
            capitalizedString += String.fromCharCode(this.charCodeAt(i) - 32);
        } else {
            capitalizedString += this[i];
        }
    }
    return capitalizedString;
}