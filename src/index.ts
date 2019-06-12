import * as assert from 'assert';
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

export const routers: Router[] = [];

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