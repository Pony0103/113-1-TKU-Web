function printMultiplicationTable() {
    var result = '';
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            result = "".concat(i, " x ").concat(j, " = ").concat(i * j, "\n");
        }
    }
    console.log(result);
}
printMultiplicationTable();
