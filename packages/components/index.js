// components/index.js
import components from './src/index';

export * from './src/index';

export default {
  install: app => components.forEach(c => app.use(c)),
};
