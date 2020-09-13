const router = require('koa-router')();
const fs = require('./utils');

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})
.get('/list', (ctx, next) => {
  ctx.body = fs.getDir('file')
})
.get('/info', (ctx, next) => {
  let content = fs.readFile('file/first.js', 'sync')
  ctx.body = content;
});

module.exports = router;