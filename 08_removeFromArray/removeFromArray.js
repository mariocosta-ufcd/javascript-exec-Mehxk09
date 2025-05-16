const removeFromArray = function(array, ...valoresAremover) {
    return array.filter(item => !valoresAremover.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
