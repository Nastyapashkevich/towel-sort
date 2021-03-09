module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        if(i%2 !== 0){
            matrix[i].reverse();
        }
        array = array.concat(matrix[i]);
    }
    
    return array;
}
