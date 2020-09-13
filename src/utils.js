const fs = require("fs");
const path = require('path');
// 文件名的地址相对于启动node的地址
// 写入文件
const writeFile = (fileName, data) => {
  return new Promise((reslove, reject) => {
    fs.writeFile(fileName, data,  err => {
      if(err) {
        console.error(err);
        reject(err);
      }else {
        reslove('数据写入成功！');
      }
    });
  })
}

// 追加文件内容
const appendFile = (fileName, data) => {
  return new Promise((reslove, reject) => {
    fs.appendFile(fileName, data,  err => {
      if(err) {
        console.error(err);
        reject(err);
      }else {
        reslove('数据写入成功！');
      }
    });
  })
}

// 打开文件
/*
  r:读取，r+:读写，rs:同步读取，rs+:同步读写
  w:写入，不在则创建，wx:写入，存在失败，w+:读写，不存在则创建，wx+:写入，存在失败
  a:追加打开，不存在创建，ax:存在失败，a+:读取追加，ax+:存在失败
*/
const openFile = (fileName, flags) => {
  return new Promise((resolve, reject) => {
    fs.open(fileName, flags, function(err, fd) {
      if(err) {
        console.error(err);
        reject(reject);
      }else {
        console.log("文件打开成功！");     
        resolve(fd)
      }
   });
  })
}

// 读取文件
const readFile = (fileName) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if(err) {
        console.error(err);
        reject(err);
      }else {
        resolve(data);
      }
    });
  })
}

// 文件属性
const statFile = fileName => {
  return fs.statSync(fileName);
}

// 获取文件夹内容
const getDir = (dirName) => {
  let res = fs.readdirSync(dirName).map(fileName => {
    let file = statFile(path.join(dirName, fileName));
    return {
      name: fileName,
      type: file.isFile() ? 'file' : 'folder'
    }
  })
  return res;
}
module.exports = {
  writeFile,
  appendFile,
  openFile,
  readFile,
  statFile,
  getDir
}