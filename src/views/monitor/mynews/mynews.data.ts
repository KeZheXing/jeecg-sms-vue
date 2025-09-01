import { BasicColumn, FormSchema } from '/@/components/Table';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
  {
    title: '设备编号',
    dataIndex: 'deviceCode',
    width: 100,
    align: 'left',
  },
  {
    title: '客户信息',
    dataIndex: 'customer',
    width: 80,
  },
  {
    title: '内容',
    dataIndex: 'content',
    width: 80,
  },
  {
    title: '消息时间',
    dataIndex: 'datetime',
    width: 80,
  },
  {
    title: '消息状态',
    dataIndex: 'messageStatus',
    width: 80,
    customRender: ({ text }) => {
      return render.renderDictNative(
        text,
        [
          { label: '待确认', value: '0', color: '' },
          { label: '发送待确认', value: '1' },
          { label: '发送已确认', value: '2' },
          { label: '落地失败', value: '3' },
          { label: '接收', value: '4' }
        ],
        true
      );
    },
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'deviceCode',
    label: '设备编号',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'customer',
    label: '客户信息',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'messageStatus',
    label: '消息状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '待处理', value: '0' },
        { label: '发送待确认', value: '1' },
        { label: '发送已确认', value: '2' },
        { label: '落地失败', value: '3' },
        { label: '接收', value: '4' },
      ],
    },
    colProps: { span: 6 },
  },
];
