exports.min = function min(array) {
    return array === undefined || array.length === 0 ? 0:  Math.min(...array);
}

exports.max = function max(array) {
    return array === undefined || array.length === 0 ?  0 :  Math.max(...array);
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0 ) {
        return 0;
    }

    const result = array.reduce((acc, el, index) => {
        return acc + el;
    }, 0);
    const number = array.length;

    return result / number;
}
