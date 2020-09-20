const http = require('http');
const chalk = require('chalk');
const logger = require('koa-logger');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('koa2-cors');
const json = require('koa-json');
const router = require('./router');
const args = require('minimist')(process.argv.slice(2));

const app = new Koa();
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(cors())
if(!args.build) {
  app.use(logger())
  app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })
}
app.use(router.routes());

const port = '3333';
const server = http.createServer(app.callback());
server.listen(port, () => {
  console.log(`server start: ${chalk.green(`http://localhost:${port}/`)}`)
})