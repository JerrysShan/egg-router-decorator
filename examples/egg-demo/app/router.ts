import { Application } from 'egg';
import { initRouter } from '../../../dist/index';

export default (app: Application) => {
  initRouter(app, { prefix: '/api' });
};
