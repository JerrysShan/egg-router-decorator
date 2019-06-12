# egg-router-decorator2

## Introduction
  use decorator declare making eggjs router easy.

## Usage
```ts
// home.ts
import { Controller } from 'egg';
import { GET } from 'egg-router-decorator2';

class HomeController extends Controller {
  @GET('/')
  async heartbeat(): Promise<any> {
    this.ctx.body = 'hello world';
  }
}

export default HomeController;

// router.ts
import { initRouter } from 'egg-router-decorator2';

export default (app) => {
  initRouter(app, { prefix: '/api' });
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


* initRouter(app: Application,options={prefix:''}) 
