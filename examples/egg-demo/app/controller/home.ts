import { Controller } from 'egg';
import { GET, POST } from '../../../../dist/index';

export default class HomeController extends Controller {
  @GET('/index')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  @POST()
  public async sayHello() {
    const { ctx } = this;
    ctx.body = { code: 0, data: [], msg: 'ok' };
  }

  @POST()
  public async edit() {
    const { ctx } = this;
    ctx.body = { code: 0, data: [], msg: 'ok' };
  }
}
