//hasVowel
String.prototype.hasVowel = function hasVowel() {
    return /[aeiou]/.test(this);
}