import { BasicColumn, FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { filterDictTextByCache } from '/@/utils/dict/JDictSelectUtil';

export const columns: BasicColumn[] = [
  {
    title: '设备编号',
    dataIndex: 'messageDeviceCode',
    width: 80,
  },
  {
    title: '客户信息',
    dataIndex: 'messageTo',
    width: 100,
  },
  {
    title: '内容',
    dataIndex: 'messageContent',
    width: 150,
  },
  {
    title: '类型',
    dataIndex: 'messageType',
    width: 100,
    customRender: ({ text }) => filterDictTextByCache('msgType', text),
  },
  {
    title: '任务状态',
    dataIndex: 'messageStatus',
    width: 90,
    customRender: function ({ text }) {
      if (text == '0') {
        return '待处理';
      } else if (text == '1') {
        return '已发送';
      }else if (text == '1') {
        return '失败';
      }
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '设备编码',
    field: 'messageDeviceCode',
    component: 'Input',
  },
  {
    label: '客户信息',
    field: 'messageTo',
    component: 'Input',
  },
  {
    label: '消息状态',
    field: 'messageType',
    customRender: function ({ text }) {
      if (text == '0') {
        return '待处理';
      } else if (text == '1') {
        return '已发送';
      }else if (text == '1') {
        return '失败';
      }
    },
  },
];

export const formSchemas: FormSchema[] = [
  {
    label: 'ID',
    field: 'id',
    component: 'Input',
    show: false,
  },
  {
    label: '模板类型',
    field: 'templateType',
    component: 'JDictSelectTag',
    defaultValue: '1',
    componentProps: {
      dictCode: 'msgType',
      type: 'radio',
      placeholder: '请选择模板类型',
    },
    required: true,
  },
  {
    label: '目标号码',
    field: 'targetNums',
    component: 'InputTextArea',
    componentProps: {
      placeholder: "英文逗号分隔",
      autoSize: {
        minRows: 8,
        maxRows: 8,
      },
    },
  },
  {
    label: '发送内容',
    field: 'messageContent',
    component: 'InputTextArea',
    componentProps: {
      autoSize: {
        minRows: 8,
        maxRows: 8,
      },
    },
    ifShow: ({ values }) => {
      return !['2', '4', '5'].includes(values.templateType);
    },
  },

  {
    label: '模板内容',
    field: 'messageContent',
    component: 'JEditor',
    ifShow: ({ values }) => {
      return ['2', '4'].includes(values.templateType);
    },
  },
  {
    label: '模板内容',
    field: 'messageContent',
    component: 'JMarkdownEditor',
    ifShow: ({ values }) => {
      return ['5'].includes(values.templateType);
    },
  },
];

export const sendTestFormSchemas: FormSchema[] = [
  {
    label: '模板编码',
    field: 'templateCode',
    component: 'Input',
    show: false,
  },
  {
    label: '模板标题',
    field: 'templateName',
    component: 'Input',
    componentProps: { disabled: true },
  },
  {
    label: '模板内容',
    field: 'templateContent',
    component: 'InputTextArea',
    componentProps: { disabled: true, rows: 5 },
  },
  {
    label: '测试数据',
    field: 'testData',
    component: 'InputTextArea',
    required: true,
    helpMessage: 'JSON数据',
    defaultValue: '{}',
    componentProps: {
      placeholder: '请输入JSON格式测试数据',
      rows: 5,
    },
  },
  {
    label: '消息类型',
    field: 'msgType',
    component: 'JDictSelectTag',
    required: true,
    defaultValue:'system',
    componentProps: { dictCode: 'messageType',type:'radio' },
  },
  {
    label: '消息接收方',
    field: 'receiver',
    required: true,
    component: 'JSelectUser',
    componentProps: {
      labelKey: 'username',
      rowKey: 'username',
    },
  },
];
