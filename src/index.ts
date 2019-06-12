import * as assert from 'assert';
import { Application } from 'egg';
import { trimController } from './utils';

export enum METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch',
}

export interface Router {
  method: string;
  path: string;
  controller: string;
  handler: string;
  middlewares: string[];
}

const routers: Router[] = [];

export function initRouter(app: Application, options = { prefix: '' }) {
  const { router, controller, middleware } = app;
  for (const item of routers) {
    const middlewares = item.middlewares.map(ele => middleware[ele]());
    const path = options.prefix ? options.prefix + item.path : item.path;
    router[item.method](path, ...middlewares, controller[item.controller][item.handler]);
  }
}

export function GET(path: string, ...middlewares: string[]): any {
  return Request(METHOD.GET, path, ...middlewares);
}

export function POST(path: string, ...middlewares: string[]): any {
  return Request(METHOD.POST, path, ...middlewares);
}

export function PUT(path: string, ...middlewares: string[]): any {
  return Request(METHOD.PUT, path, ...middlewares);
}

export function DELETE(path: string, ...middlewares: string[]): any {
  return Request(METHOD.DELETE, path, ...middlewares);
}

export function DEL(path: string, ...middlewares: string[]): any {
  return Request(METHOD.DELETE, path, ...middlewares);
}

export function HEAD(path: string, ...middlewares: string[]): any {
  return Request(METHOD.HEAD, path, ...middlewares);
}

export function PATCH(path: string, ...middlewares: string[]): any {
  return Request(METHOD.PATCH, path, ...middlewares);
}

export function OPTIONS(path: string, ...middlewares: string[]): any {
  return Request(METHOD.OPTIONS, path, ...middlewares);
}

export function Request(method: METHOD, path: string, ...middlewares: string[]): any {
  assert(method);
  assert(path);
  return (target, propertyKey: string) => {
    routers.push({ method, path, controller: trimController(target.constructor.name), handler: propertyKey, middlewares });
  };
}