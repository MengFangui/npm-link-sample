# npm link使用
## 简介
链接到包文件夹
https://docs.npmjs.com/cli/link

## 使用
package.json
```
{
  "name": "cli-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "bin": "cli.js"
}

```
在package.json中有bin字段。

### 运行(本目录)
```
npm link
```
### 任意位置运行
```
cli-demo
```
或者
```
cli-demo -v
```
