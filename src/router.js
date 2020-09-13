const router = require('koa-router')();
const fs = require('./utils');

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})
.get('/list', (ctx, next) => {
  ctx.body =fs.getDir('file')
  
})
.get('/info', (ctx, next) => {
  ctx.body = fs.statFile('file/first.js')
})

module.exports = router;