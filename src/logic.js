class MathTools {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    circleArea(a) {
        let result = 3.14159*((a/2)^2);
        return result.toFixed(3);
    }
    circleCircumference(a) {
        let result = 6.28318 * a;
        return result.toFixed(3);
    }
}
module.exports.MathTools = MathTools;