function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let numberArray =[];
    for (const element of array) {
        // console.log(typeof element);
        if (typeof element === 'number' && isNaN(element) === false) {
            numberArray.push(element);
            
        }
    }return numberArray;
}

console.log(deleteInvalids([1, null, undefined,18,-19, NaN,'12',[1,2], {ob : 'lala'}]));
