function reverse(string) {
    string = [...string].reverse().join("");
    return string;
}

module.exports = reverse;