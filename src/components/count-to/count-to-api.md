
## 数字滚动组件  API


### Options

参数	 	| 描述				| 类型 		| 默认值
------------|-------------------|-----------|-----------
startVal 	| 开始值 			| Number 	|  0
endVal 		| 结束值			| Number 	|  2017
duration 	| 持续的时间 		| Number 	|  3000
autoplay 	| 是否自动播放 		| Boolean 	|  true
decimals 	| 要显示的小数位数 	| Number 	|  0
decimal 	| 小数/小数点 		| String 	|  .（点）
separator 	| 分隔符 			| String 	|  ,（逗号）
prefix 		| 前缀				| String 	|  ''
suffix 		| 后缀 				| String 	|  ''
useEasing 	| 是否使用 `easing` | Boolean 	|  true
easingFn 	| 缓动函数 			| Function 	|  —

### Functions


| 函数名 				| 描述
|-----------------------|-----------------------------------------------
| mountedCallback 		| 在`mounted`钩子触发`emit mountedCallback`函数
| start 				| start the countTo
| pause 				| pause the countTo
| reset 				| reset the countTo