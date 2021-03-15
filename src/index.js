
exports.min = function min (array) {
    if (array === undefined || array.length === 0)
        return 0;
    let answer = Number.MAX_SAFE_INTEGER;
    for (let i =0; i < array.length - 1; i++){
        if(array[i] < answer)
            answer = array[i];
    }
    return answer;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0)
        return 0;
    let answer = Number.MIN_SAFE_INTEGER;
    for (let i =0; i < array.length; i++){
        if(array[i] > answer)
            answer = array[i];
    }
    return answer;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0)
        return 0;
    let answer = 0;
    for (let i =0; i < array.length; i++){
        answer += array[i];
    }
    return answer/(array.length);
}
