// src/button/index.js
import  withInstall  from '../utils/withInstall';
import button from './src/index.vue';

// 导出 install
const Button = withInstall(button);
// 导出button组件
export default Button;
