
const defParams = function(arg1, arg2=null, arg3=10) {
    if (!arg2) {
        console.log('nothing was passed in or we passed in a falsy value');
    }

    const pow = arg3;

    if (typeof arg1 === 'number') {
        return arg1 ** pow;
    } else {
        throw new TypeError('argument 1 was not a number');
    }
}
