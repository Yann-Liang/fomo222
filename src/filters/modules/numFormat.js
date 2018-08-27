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
  * @param symbol	 	货币称号，默认为人民币
  * @param dat	 		保留的小数点位数，默认为2位
  * @param return
*/
Vue.filter('numFormat', function (value,) {
  return accounting.formatNumber(value,4,',');

})