/**
 * 这里面就是封装我们的常用的代码的js代码
 */
var kits = {};


/** 
* 封装一个获取指定区间的随机整数的方法
*/
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};


/**
 * 封装的是一个可以生成唯一id的方法
 */
kits.primaryKey = function(){
    // 我们通过时间戳 + 大范围的随机数来生成id
    let now = Date.now(); //得到是从1970年到现在为止的总的毫秒数
    // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
    let r = kits.randomInt(100000,999999);
    // console.log(r);
    // 把两个得到的结果，拼接起来
    return now + '' + r;
  }