// 这里面就是封装我们的常用的代码的js代码
var kits = {};


// 封装一个获取指定区间的随机整数的方法
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};