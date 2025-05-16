const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let resultado = '';
    for (let i = 0; i < num; i++) {
        resultado += string;
    }
    return resultado;
};

module.exports = repeatString;
