var express = require('express')
var app = express()



var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const myMiddlewareThatDoesntSkip = (req, res, next) => {
  console.log('middlewarethatdoesntskip')
  next('route');
  //THIS SHOULD BE LOGGED
}

const myMiddlewareThatSkips = (req, res, next) => {
  console.log('middlewarethatskips')
  next(new Error('you have an error'));
  //THIS SHOULD NOT BE LOGGED
}

app.use(myMiddlewareThatDoesntSkip);
app.use(myMiddlewareThatSkips);
app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use((err, req,res,next) => {
  console.log('custom error handler at end');
})

app.listen(3000)
