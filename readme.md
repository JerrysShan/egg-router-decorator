# egg-router-decorator

## Introduction
  use decorator declare making eggjs router easy.

## Usage
```ts
// home.ts
import { Controller } from 'egg';
import { GET } from 'egg-router-decorator';

class HomeController extends Controller {
  @GET('/')
  async heartbeat(): Promise<any> {
    this.ctx.body = 'hello world';
  }
}

export default HomeController;

// router.ts
import { routers } from 'egg-router-decorator';

export default (app) => {
  const { router, controller, middleware } = app;
  for (const item of routers) {
    const middlewares = item.middlewares.map(ele => middleware[ele]());
    router[item.method](
      item.path,
      ...middlewares,
      controller[item.controller][item.handler]);
  }
};

```


## API

* GET(path,...middlewares)
* POST(path,...middlewares)
* PUT(path,...middlewares)
* DELETE(path,...middlewares)
* PATCH(path,...middlewares)
* OPTIONS(path,...middlewares)
* HEAD(path,...middlewares)
* Request(method,path,...middlewares)

   path \<string\>, required

   method: \<string\> ,'GET','PUT','POST','DELETE','PATCH','OPTIONS','HEAD',

  middlewares: \<Array[string]\> , names of eggjs middlewares


* routers \<Array\> ,
