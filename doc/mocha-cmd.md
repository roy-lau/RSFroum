#   mocha 命令行解释


Usage: mocha [debug] [options] [files]

Commands:

  init <path>  initialize a client-side mocha setup at <path>

Options:

|参数									|解释
|---------------------------------------|------------------------------------
|-h, --help                              |显示使用帮助
|-V, --version                           |显示版本信息
|-A, --async-only                        |强制所有测试带有回调（异步）或返回一个promise
|-c, --colors                            |强制启用颜色
|-C, --no-colors                         |强制关闭颜色
|-G, --growl                             |启用弹出消息
|-O, --reporter-options <k=v,k2=v2,...>  |测试报告工具详细设置
|-R, --reporter <name>                   |指定测试报告工具
|-S, --sort                              |测试文件排序
|-b, --bail                              |第一次测试不通过立即结束测试
|-d, --debug                             |开启node的debugger模式, 同node --debug
|-g, --grep <pattern>                    |只运行匹配<pattern>的测试
|-f, --fgrep <string>                    |只运行包含<string>的测试
|-gc, --expose-gc                        |暴露gc扩展
|-i, --invert                            |反转--grep 和--fgrep 匹配
|-r, --require <name>                    |加载指定模块
|-s, --slow <ms>                         |以毫秒为单位定义"慢" 测试门槛 [75]
|-t, --timeout <ms>                      |以毫秒为单位设置测试用例超时时间 [2000]
|-u, --ui <name>                         |指定用户接口 (bdd|tdd|qunit|exports)
|-w, --watch                             |监测文件变动
|--check-leaks                           |检查全局变量泄露
|--full-trace                            |显示完整的跟踪堆栈
|--compilers <ext>:<module>,...          |使用指定的模块编译文件
|--debug-brk                             |在首行启用node的debugger断点
|--globals <names>                       |allow the given comma-delimited global [names]（没办法强行翻译了）|
|--es_staging                            |开启所有过时的特性
|--`harmony<_classes,_generators,...>`   |all node --harmony* flags are available
|--preserve-symlinks                     |命令模块加载器在解析和缓存模块时保留符号链接
|--icu-data-dir                          |包括ICU数据
|--inline-diffs                          |在行内显示实际/预期的字符差异
|--interfaces                            |显示可用的接口（bdd|tdd|qunit|exports）
|--no-deprecation                        |禁用警告
|--no-exit                               |请求一个彻底的事件循环终止: Mocha不会调用 process.exit
|--no-timeouts                           |禁用超时, 隐含 --debug
|--opts <path>                           |指定选项路径
|--perf-basic-prof                       |enable perf linux profiler (basic support)
|--prof                                  |记录统计分析信息
|--log-timer-events                      |记录包含外部回调的时间点
|--recursive                             |**包含子目录**
|--reporters                             |显示可用的测试报告工具
|--retries <times>                       |设置重试未通过的测试用例的次数
|--throw-deprecation                     |当使用了废弃的方法时抛出异常
|--trace                                 |追踪函数借调
|--trace-deprecation                     |显示废弃的跟踪堆栈
|--use_strict                            |强制严格模式
|--watch-extensions <ext>,...            |--watch 上附加的监控扩展
|--delay                                 |等待异步套件定义

* -W，--watch

初始化后，监测文件变动运行测试
* --compilers

CoffeeScript不再被直接支持。这类预编译语言可以使用相应的编译器扩展来使用，比如`CS1.6：--compilers coffee:coffee-script` 和`CS1.7+：--compilers coffee:coffee-script/register
babel-register`

如果你的ES6模块是以.js为扩展名的，你可以`npm install --save-dev babel-register`，然后`--require babel-register; --compilers`就可以指定文件扩展名
* -B，--ball

只对首个异常感兴趣？使用`--bail`
* -D，--debug

开启node的调试模式，这会用`node debug <file ...>`来执行你的脚本，允许你逐行调试代码并用debugger声明来打断点。注意`mocha debug`和`mocha --debug`的区别：`mocha debug`会启动node内置的debug客户端，`mocha --debug`则允许你使用其它调试工具——比如`Blink Developer Tools`。
* --globals <name>

接受一个以逗号分隔的全局变量名，例如，如果你的应用有意暴露一个全局变量名`app`或`YUI`，你可能就会使用`--globals app,YUI`。它还接受通配符。`--globals '*bar'`会匹配`foobar`, `barbar`等。你也可以简单地传入`*`来忽略所有全局变量。
* check-leaks

在运行测试时，Mocha默认不会检查全局变量泄露，可以使用`--check-leaks`来开启这一功能，使用`--globals`来指定接受的全局变量比如`--globals jQuery,MyLib`。
* -r，--require <module-name>

`--require`选项对诸如`should.js`一类的库很有用，所以你可以使用`--require should`而不是在每一个测试文件中都调用`require('should')`。需要注意的是因为`should`是增强了`Object.prototype`所以可以正常使用，然而假如你希望访问某模块的输出你就只能require它们了，比如`var should = require('should')`。此外，还可以使用相对路径，比如`--reqiure ./test/helper.js`
* -U，--ui <name>

`--ui`选项让你指定想使用的接口，默认为`“bdd”`。
* -R，--reporter <name>

`--reporter`选项允许你指定希望使用的报告器，默认为`“spec”`。这个标记也可以用来使用第三方的报告器。例如，如果你`npm install mocha-locv-reporter`，你可以`--reporter mocha-locv-reporter`。
* -T，--timeout <ms>

指定测试用例超时时间，默认为2秒。你可以传入毫秒数或者一个带s单位后缀的秒数进行覆盖，例如`--timeout 2s`和`--timeout 2000`是等价的。
* -S，--slow <ms>

指定“慢”测试阈值，默认为75毫秒。Mocha用这个去高亮那些耗时过长的测试。
* -g，--grep <pattern>

指定`--grep`选项让Mocha只运行匹配`<pattern>`的测试，`<pattern>`将会作为正则表达式进行解析。

假如，像下面的片段那样，你有一些`“api”`相关的测试和一些`“app”`相关的测试；则前者可以使用`--grep api`来运行，后者可使用`--grep --app`来运行

```js
describe('api', function() {
  describe('GET /api/users', function() {
    it('respond with an array of users', function() {
      // ...
    })
  })
})

describe('app', function() {
  describe('GET /users', function() {
    it('respond with an array of users', function() {
      // ...
    })
  })
})
```