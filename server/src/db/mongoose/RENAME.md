1. Mongoose支持的数据类型

    String        --   字符串
    Number        --   数字，包括整数和小数
    Date          --   日期
    Boolean       --   布尔
    Buffer        --   用于存储二进制数据，eg：图片，最大不超过16M
    ObjectId      --   mongodb自动生成_id,作为数据库的主键
    Mixed         --   可以存储任意的数据类型
    Array         --   数组或内置子文档(subdocuments)

验证

- required 非空验证
- min/max 范围验证（边值验证）
- enum/match 枚举验证/匹配验证
- validate 自定义验证规则

	var schema = new mongoose.Schema({
	    name:{
	        type:'String',
	        minlength: 3,
        	maxlength: 18,
	        required:true //姓名非空
	      },
	      age:{
	        type:'Nunmer',
	        min:18,       //年龄最小18
	        max:120       //年龄最大120
	      },
	      city:{
	        type:'String',
	        enum:['北京','上海']  //只能是北京、上海人
	      },
	      other:{
	        type:'String',
	        validate:[validator,err]  //validator是一个验证函数，err是验证失败的错误信息
	      }
	});

自定义验证

	var userSchema = new Schema({
	  phone: {
	    type: String,
	    validate: {
	      validator: function(v) {
	        return /d{3}-d{3}-d{4}/.test(v);
	      },
	      message: '{VALUE} is not a valid phone number!'
	    }
	  }
	});

验证失败


如果验证失败，则会返回err信息，err是一个对象该对象属性如下

    err.errors                	// 错误集合（对象）
    err.errors.color          	// 错误属性(Schema的color属性)
    err.errors.color.message  	// 错误属性信息
    err.errors.path             // 错误属性路径
    err.errors.type             // 错误类型
    err.name                	// 错误名称
    err.message                 // 错误消息


一旦验证失败，Model和Entity都将具有和err一样的errors属性

2. hook

- pre  ：前
- post ：后

3. 事件

	validate ：已验证（但尚未保存）
	save ：已保存
	init ：已从DB初始化
	remove 已被删除

	UserSchema.post('validate', function(doc) { //1
	 console.log('%s 已验证（但尚未保存）2', doc._id);
	});
	UserSchema.post('save', function(doc) {//2
	console.log('%s 已保存', doc._id);
	});
	UserSchema.post('init', function(doc) {//3
	console.log('%s 已从DB初始化', doc._id);
	});
	UserSchema.post('remove', function(doc) {
	console.log('%s 已被删除', doc._id);
	});

methods和statics的区别

- 区别就是一个给Model添加方法`（statics）`，
- 一个给实例添加方法`（methods）`。
