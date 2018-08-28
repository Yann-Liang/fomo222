/**
 * @description 货币符号过滤器
 * @author liangyanxiang
 * @param
 * @returns
 */

import Vue from 'vue';
import accounting from 'accounting';

/**
  * 格式化数字，相当于vue1.0时的currency过滤器
  * @param value 		传进来的数字
  * @param len      精度 保留的小数点位数，默认为2位
  * @param return
*/
Vue.filter('numFormat', function (value,len=2) {
  return accounting.formatNumber(value,len,',');

})