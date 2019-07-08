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


  /**
 * @author 谁写的 联系方式
 * @date 写这个代码的时间
 * @description 功能是什么 - 封装好的移动端的单击操作
 * @param { 类型 - element } element 
 * @param {number} span 按下的时间间隔
 * @param {number} offset 允许的位置偏差
 * @param {function} callback 回调函数
 */
function tap(element, callback, span, offset) {
    span = span || 200;
    offset = offset || 50;
    // 定义一个变量，记录开始时间
    let startTime = 0;
    // 定义变量，记录开始位置
    let startX = 0;
    let startY = 0;
    // 先注册触摸开始事件
    element.addEventListener('touchstart', function (e) {
      // 判断是否是单指操作
      if (e.touches.length !== 1) {
        // console.log('不是单指操作');
        return;
      }
      // 记录开始的时间
      startTime = Date.now();
      // 记录开始的位置
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
      // console.log(e.touches);
    })
  
    // 注册结束事件
    element.addEventListener('touchend', function (e) {
      // 是否单指操作
      if (e.changedTouches.length !== 1) {
        // console.log('不是单指操作');
        return;
      }
      // 记录结束时间
      let endTime = Date.now();
      // 算出开始和结束的间隔，判断
      if (endTime - startTime > span) {
        // console.log('按的时间太长了');
        return;
      }
      // 记录结束位置
      let endX = e.changedTouches[0].pageX;
      let endY = e.changedTouches[0].pageY;
      // 算出偏差
      if (Math.abs(startX - endX) > offset || Math.abs(startY - endY) > offset) {
        // console.log('位置偏差太大了');
        return;
      }
      // 如果上面的条件都不成立，就是单击操作了
    //   console.log('这是一个单击操作');
      // 如果已经是一个单击操作了，需要做一些对应的响应 - 如果是封装好的代码里面，需要让别人能做一些什么事情，就让把一个函数传递归来
      callback && callback();
    })
  }