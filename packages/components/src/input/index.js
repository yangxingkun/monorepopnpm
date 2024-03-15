// src/input/index.js
import withInstall  from '../utils/withInstall';
import input from './src/index.vue';

// 导出 install
const Input = withInstall(input);
// 导出button组件
export default Input;
