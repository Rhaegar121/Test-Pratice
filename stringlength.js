function stringlength(string) {
    if (string.length < 1 || string.length > 10) {
        throw new Error('rewrite the string')
    }
    return string.length;
}

module.exports = stringlength;