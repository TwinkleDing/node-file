const http = require('http');
const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})
app.use(router.routes());

const server = http.createServer(app.callback());

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

const port = '3333';
server.listen(port, () => {
  console.log(`server start: ${chalk.green(`http://localhost:${port}/`)}`)
})