import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getAllRolesListNoByTenant, getAllTenantList } from './user.api';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
export const columns: BasicColumn[] = [
  {
    title: '设备编号',
    dataIndex: 'deviceCode',
    width: 120,
  },
  {
    title: '设备ID',
    dataIndex: 'deviceId',
    width: 100,
  },
  {
    title: '绑定用户',
    dataIndex: 'bindUser',
    width: 100,
  },
  {
    title: '今日任务处理量',
    dataIndex: 'taskNum',
    width: 100,
  },
  {
    title: '今日发送量',
    dataIndex: 'send',
    width: 80,
  },
  {
    title: '今日接收量',
    dataIndex: 'receive',
    width: 80,
  },
  {
    title: '回复率',
    dataIndex: 'reply',
    width: 80,
  },{
    title: '设备通道',
    dataIndex: 'deviceChannel',
    width: 80,
    customRender: ({ text }) => {
      return text == '0' ? '卡发' : text == '1' ? 'JERRY' : '';
    },
  },
  {
    title: '设备状态',
    dataIndex: 'deviceStatus',
    width: 80,
    customRender: ({ text }) => {
      return text == 'Y' ? '是' : text == 'N' ? '否' : '';
    },
  },
];

export const recycleColumns: BasicColumn[] = [
  {
    title: '用户账号',
    dataIndex: 'username',
    width: 100,
  },
  {
    title: '用户姓名',
    dataIndex: 'realname',
    width: 100,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: 80,
    customRender: render.renderAvatar,
  },
  {
    title: '启动',
    dataIndex: 'sex',
    width: 80,
    sorter: true,
    customRender: ({ text }) => {
      return render.renderDict(text, 'is_open');
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '设备编号',
    field: 'deviceCode',
    component: 'JInput',
    //colProps: { span: 6 },
  },
  {
    label: '设备状态',
    field: 'deviceStatus',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'is_open',
      placeholder: '请选择状态',
    },
   //colProps: { span: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    label: '设备编号',
    field: 'deviceCode',
    component: 'Input',
    required: true,
    dynamicDisabled: ({ values }) => {
      return !!values.id;
    },
    // dynamicRules: ({ model, schema }) => rules.duplicateCheckRule('sys_user', 'username', model, schema, true),
  },
  {
    label: '设备ID',
    field: 'deviceId',
    required: true,
    component: 'Input',
  },
  {
    label: '设备账号',
    field: 'deviceUserName',
    required: true,
    component: 'Input',
  }, {
    label: '设备密码',
    field: 'devicePassword',
    required: true,
    component: 'Input',
  },{
    label: '发送间隔/s',
    field: 'interval',
    required: true,
    component: 'Input',
  },{
    label: '发送上限',
    field: 'sendLimit',
    required: true,
    component: 'Input',
  }, {
    label: '其他信息',
    field: 'deviceOtherInfo',
    required: false,
    component: 'Input',
  },  {
    label: '设备状态',
    field: 'deviceStatus',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'is_open',
      placeholder: '是否启动',
    },
  },{
    field: 'deviceChannel',
    component: 'Select',
    label: '设备渠道',
    componentProps: {
      options:[
        {label:'卡发',value:0},
        {label:'JEERY',value:1}
      ]
    }
  },{
    field: 'bindUser',
    component: 'UserSelect',
    label: '绑定用户',
    helpMessage: ['component模式'],
    colProps: { span: 12 },
    componentProps: {
      multi:false,
      store:'username'
    }
  }
];

export const formPasswordSchema: FormSchema[] = [
  {
    label: '用户账号',
    field: 'username',
    component: 'Input',
    componentProps: { readOnly: true },
  },
  {
    label: '登录密码',
    field: 'password',
    component: 'StrengthMeter',
    componentProps: {
      placeholder: '请输入登录密码',
    },
    rules: [
      {
        required: true,
        message: '请输入登录密码',
      },
      {
        pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,./]).{8,}$/,
        message: '密码由8位数字、大小写字母和特殊符号组成!',
      },
    ],
  },
  {
    label: '确认密码',
    field: 'confirmPassword',
    component: 'InputPassword',
    dynamicRules: ({ values }) => rules.confirmPassword(values, true),
  },
];

export const formAgentSchema: FormSchema[] = [
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    componentProps: {
      readOnly: true,
      allowClear: false,
    },
  },
  {
    field: 'agentUserName',
    label: '代理人用户名',
    required: true,
    component: 'JSelectUser',
    componentProps: {
      rowKey: 'username',
      labelKey: 'realname',
      maxSelectCount: 10,
    },
  },
  {
    field: 'startTime',
    label: '代理开始时间',
    component: 'DatePicker',
    required: true,
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      placeholder: '请选择代理开始时间',
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'endTime',
    label: '代理结束时间',
    component: 'DatePicker',
    required: true,
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      placeholder: '请选择代理结束时间',
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'JDictSelectTag',
    defaultValue: '1',
    componentProps: {
      dictCode: 'valid_status',
      type: 'radioButton',
    },
  },
];

export const formQuitAgentSchema: FormSchema[] = [
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    componentProps: {
      readOnly: true,
      allowClear: false,
    },
  },
  {
    field: 'agentUserName',
    label: '交接人员',
    //required: true,
    component: 'JSelectUser',
    componentProps: {
      rowKey: 'username',
      labelKey: 'realname',
      maxSelectCount: 1,
    },
  },
  {
    field: 'startTime',
    label: '交接开始时间',
    component: 'DatePicker',
    //required: true,
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      placeholder: '请选择交接开始时间',
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'endTime',
    label: '交接结束时间',
    component: 'DatePicker',
    //required: true,
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      placeholder: '请选择交接结束时间',
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'JDictSelectTag',
    defaultValue: '1',
    componentProps: {
      dictCode: 'valid_status',
      type: 'radioButton',
    },
  },
];

//租户用户列表
export const userTenantColumns: BasicColumn[] = [
  {
    title: '用户账号',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '用户姓名',
    dataIndex: 'realname',
    width: 100,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: 120,
    customRender: render.renderAvatar,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    width: 100,
  },
  {
    title: '部门',
    width: 150,
    dataIndex: 'orgCodeTxt',
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ text }) => {
      if (text === '1') {
        return '正常';
      } else if (text === '3') {
        return '审批中';
      } else {
        return '已拒绝';
      }
    },
  },
];

//用户租户搜索表单
export const userTenantFormSchema: FormSchema[] = [
  {
    label: '账号',
    field: 'username',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '名字',
    field: 'realname',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: 'sex',
      placeholder: '请选择性别',
      stringToNumber: true,
    },
    colProps: { span: 6 },
  },
];
