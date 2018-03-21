#   API

### 目录
* [规约](#Protocol)
* 用户(User)
	- [1、新增(addUser)](#addUser)
	- [2、删除(delUser)](#delUser)
	- [3、修改(updateUser)](#updateUser)
	- [4、查询(findUser)](#findUser)
* 用户(User)
	- [1、查询(findMenu)](#findMenu)


### <a name="Protocol" /> 规约：

* BASE_URL: `139.199.99.154:3000`

* 返回参数

| 字段 		| 类型 		| 字段说明 		| 备注		 |
|-----------|-----------|---------------|------------|
|errNo		|Number		|`0`:成功, `1`失败|
|massage	|String		|提示信息		|
|data		|Object		|返回数据		|



### 用户(User)

####  <a name="addUser" /> 1、新增(add)

- __接口地址： addUser__

- __请求方式： Post__

> 请求数据

| 字段 		| 类型 		| 字段说明 		| 是否必填 | 备注		|
|-----------|-----------|---------------|----------|------------|
|name		|String		|用户名			|			|
|pwd		|String		|密码			|是			|
|email		|String		|邮箱			|是			|
|phone		|Number		|手机号			|			|
|age		|Number		|年龄			|			|
|addr		|String		|地址			|			|
|ip			|String		|ip				|			|
|headImg	|String		|头像路径		|			|
|macAddr	|String		|mac地址		|			|

> 返回数据

| 字段 		| 类型 		| 字段说明 		| 备注		 |
|-----------|-----------|---------------|------------|
|_id		|String		|				|
|……			|……			|				|

####  <a name="delUser" /> 2、删除(del)


- __接口地址： delUser__

- __请求方式： delete__

> 请求数据

| 字段 		| 类型 		| 字段说明 		| 是否必填 | 备注		 |
|-----------|-----------|---------------|----------|------------|
|_id		|String		|新增时返回的`_id` | 是
|……			|……			|				|


> 返回数据

| 字段 		| 类型 		| 字段说明 		| 备注		|
|-----------|-----------|---------------|------------|
|_id		|String		|				|			|
|name		|String		|用户名			|			|
|pwd		|String		|密码			|			|
|email		|String		|邮箱			|			|
|phone		|Number		|手机号			|			|
|age		|Number		|年龄			|			|
|addr		|String		|地址			|			|
|ip			|String		|ip				|			|
|headImg	|String		|头像路径		|			|
|macAddr	|String		|mac地址		|			|

####  <a name="updateUser" /> 3、修改(update)

- __接口地址： updateUser__

- __请求方式： Post__


> 请求数据(_可以只传部分字段_)

| 字段 		| 类型 		| 字段说明 		| 是否必填 | 备注		|
|-----------|-----------|---------------|----------|------------|
|_id		|String		|				|是			|
|name		|String		|用户名			|			|
|pwd		|String		|密码			|			|
|email		|String		|邮箱			|			|
|phone		|Number		|手机号			|			|
|age		|Number		|年龄			|			|
|addr		|String		|地址			|			|
|ip			|String		|ip				|			|
|headImg	|String		|头像路径		|			|
|macAddr	|String		|mac地址		|			|



> 返回数据

| 字段 		| 类型 		| 字段说明 		| 备注		 |
|-----------|-----------|---------------|------------|
|_id		|String		|				|
|……			|……			|				|

####  <a name="findUser" /> 4、查询(find)

- __接口地址： findUser__

- __请求方式： get__


> 请求数据(_可以只传部分字段_)

| 字段 		| 类型 		| 字段说明 		| 是否必填 | 备注		|
|-----------|-----------|---------------|----------|------------|
|_id		|String		|				|			| 传`_id`只返回一条
|name		|String		|用户名			|			|
|pwd		|String		|密码			|			|
|email		|String		|邮箱			|			|
|phone		|Number		|手机号			|			|
|age		|Number		|年龄			|			|
|addr		|String		|地址			|			|
|ip			|String		|ip				|			|
|headImg	|String		|头像路径		|			|
|macAddr	|String		|mac地址		|			|
|pageCurrent|String		|当前页数		|			|默认 1
|pageSize	|String		|总页数			|			|默认 10

> 返回数据

| 字段 		| 类型 		| 字段说明 		| 备注		 |
|-----------|-----------|---------------|------------|
|_id		|String		|				|
|……			|……			|				|

### 菜单(Menu)

####  <a name="findMenu" /> 1、查询(find)

- __接口地址： findMenu__

- __请求方式： get__


> 请求数据

无

> 返回数据

| 字段 		| 类型 		| 字段说明 		| 备注		 |
|-----------|-----------|---------------|------------|
|_id		|String		|				|
|menuList	|Array		|菜单列表		|