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

//toLower
String.prototype.toLower = function () {
    let capitalizedString = '';

    for (let i = 0; i < this.length; i++) {

        if (/[A-Z]/.test(this[i])) {
            capitalizedString += String.fromCharCode(this.charCodeAt(i) + 32);
        } else {
            capitalizedString += this[i];
        }
    }
    return capitalizedString;
}

//ucFirst
String.prototype.ucFirst = function () {
    uCFirstString = '';
    /[a-z]/.test(this[0]) ? uCFirstString += this[0].toUpper() : uCFirstString += this[0];

    return uCFirstString += this.substr(1, this.length - 1);
}

//isQuestion
String.prototype.isQuestion = function () {
    return /\?\s*?$/.test(this);
}