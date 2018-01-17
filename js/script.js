var items = [1, 2, 1, 4, 4, 7, 7, 1];
var items2 = [1, 8, 9, 3, 6, 4];

function RemDupl(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        var temp = arr1[i];
        if (temp == arr1[i]) {
            arr1.splice(i, 1);
        }
    }
    for (i = 0; i < arr2.length; i++) {
        temp = arr2[i];
        if (temp == arr2[i]) {
            arr2.splice(i, 1);
        }
    }
    arr1.sort(function (a, b) { return a - b });
    arr2.sort(function (a, b) { return a - b });
    console.log(arr1);
    console.log(arr2);
    arrConcat = arr1.concat(arr2);
    console.log(arrConcat);
    arrConcat.sort(function (a, b) { return a - b });
    console.log(arrConcat);
    for (i = 0; i < arrConcat.length; i++) {
        temp = arrConcat[i];
        if (temp == arrConcat[i + 1]) {
            arrConcat.splice(i, 2);
        }
    }
    return arrConcat;
}

var x = RemDupl(items, items2);

console.log(x);
