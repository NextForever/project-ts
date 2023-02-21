var currRate = '1.05';
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = fetchCurr(currRate) * amount * commission;
        console.log(res);
        // Или запись в элемент на странице вместо консоли
    }
    else {
        console.log('Сейчас обмен недоступен');
    }
}
transferEurToUsd(true, 500, 1.1);
var departmens = ['dev', 'disign', 'marketing'];
var departmen = departmens[0];
console.log(departmen);
var report = departmens.filter(function (d) { return d !== 'dev'; }).map(function (d) { return "".concat(d, " - done"); });
console.log(report);
