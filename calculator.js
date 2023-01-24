class calculator {
    add(x,y) {
        return x + y;
    }
    subtract(x,y) {
        return x - y;
    }
    divide(x,y) {
        if (x === 0 || y === 0) {
            return undefined;
        } return x/y;
    }
    multiply(x,y) {
        return x * y;
    }
}

module.exports = calculator;