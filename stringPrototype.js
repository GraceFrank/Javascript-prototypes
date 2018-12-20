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

//word
String.prototype.word = function () {
    return this.match(/\w+-?\w*/g);
}

//wordCount
String.prototype.wordCount = function () {
    return (this.match(/\d/g)).length;
}

//isDigit
String.prototype.isDigit = function () {
    return /^\d$/.test(this);
}

//numberWords
String.prototype.numberWords = function () {

    wordNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    numberToWords = '';

    for (let i = 0; i < this.length; i++) {
        numberToWords += wordNumber[this[i]] + ' ';
    }//end of for loop
    return numberToWords;

}//end of numberWords Function

//alternatingCase
String.prototype.alternatingCase = function () {
    alternateCaseString = "";

    for (let indexOfString = 0; indexOfString < this.length; indexOfString++) {
        if (indexOfString % 2 === 0) {
            alternateCaseString += this[indexOfString].toLower();
        } else {
            alternateCaseString += this[indexOfString].toUpper();
        }
    }
    return alternateCaseString;
}

//inverseCase
String.prototype.inverseCase = function() {
    let stringInverse = '';

    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpper()) {
            stringInverse += this[i].toLower();
        } else {
            stringInverse += this[i].toUpper();
        }
    }//end of forloop
    return stringInverse
}//end of funcion inverseCase