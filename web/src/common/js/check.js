// 登陆校验
export const logonCheck = {
  UserName: [
    { required: true, message: '请输入登录名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
  ],
  PassWord: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
  ],
};

// 用户校验
export const userCheck = {
  UserName: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
  UserLoginName: [
    { required: true, message: '请填写登录名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
  ],
  Sex: [],
  RoleCode: [{ required: true, message: '请选择角色', trigger: 'change' }],
  HospitalCode: [{ required: true, message: '请选择医院', trigger: 'change' }],
  MobilePhone: [
    // { required: true, message: '请输入手机电话', trigger: 'blur' },
    // { type: 'number', message: '电话号码必须是数字', trigger: 'blur' },
    { min: 6, max: 11, message: '电话号码长度在6到11个字符', trigger: 'blur' }
  ],
  Email: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }],
};

// 数据元维护校验
export const SdItemCheck = {
  ItemName: [{ required: true, message: '请输入数据元名称!', trigger: 'blur' }],
  ItemAlias: [{ required: true, message: '请输入数据元简称!', trigger: 'blur' }],
  ItemFormat: [{ required: true, message: '请选择结果形式!', trigger: 'change' }],
  ItemTypeCode: [{ required: true, message: '请选择数据元类别', trigger: 'change' }],
  ItemCvCode: [{ required: true, message: '请选择公有', trigger: 'change' }],
  // ItemUnit: [{ required: true, message: '请输入数据元单位!', trigger: 'blur' }],
};
