import { Controller } from 'egg';
import { GET } from '../../../../dist/index';

export default class HomeController extends Controller {
  @GET('/index')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
