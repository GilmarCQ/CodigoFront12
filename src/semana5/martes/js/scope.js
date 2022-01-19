
function minMax(arr) {
    console.log(arr);
    console.log(arr.length);
    switch (arr.length) {
        case 0:
            console.log(arr.length);
            return [0,0];
            break;
        case 1:
            console.log(arr.length);
            return [arr[0], arr[0]];
            break;
        default:
            console.log(arr.length);
            let min = Math.min(...arr);
            let max = Math.max(...arr);
            console.log(min);
            console.log(max);
            return [min, max];
            break
    }
}
let res = minMax([14, 35, 6, 1, 34, 54]);
console.log(res);