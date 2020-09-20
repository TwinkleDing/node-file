const router = require('koa-router')();
const fs = require('./utils');

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
})
.get('/api/file/list', (ctx, next) => {
  ctx.body = fs.getDir(ctx.query.dirName)
})
.post('/api/file/stat', (ctx, next) => {
  let content = fs.statFile(ctx.request.body.file, 'sync')
  ctx.body = content;
})
.post('/api/file/info', (ctx, next) => {
  let content = fs.readFile(ctx.request.body.file, 'sync')
  ctx.body = content;
});

module.exports = router;