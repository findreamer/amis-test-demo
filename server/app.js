const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/dynamic/tabs', (req, res) => {
  res.send({
    code: 0,
    data: {
      arr: Array(10)
        .fill(1)
        .map((_, idx) => ({
          a: '自定义tab' + idx,
          b: (Math.random() * 1000) >> 1,
          id: (Math.random() * 1000) >> 1,
        })),
    },
  });
});

app.get('/dynamic/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    code: 0,
    data: {
      id: id,
      type: 'page',
      body: [
        {
          type: 'tpl',
          tpl: '这是从后端获取的内容' + id,
        },
      ],
    },
  });
});

app.get('/amis/api/mock2/form/departUser', (req, res) => {
  const { ref, dep } = req.query;
  if (ref) {
    res.send({
      status: 0,
      msg: '成功',
      data: {
        options: [
          {
            label: '彭丹',
            value: 'liu.ma',
            no: '114517',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '谭中科1',
            value: 'test.test319',
            no: '114645',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '罗怀西',
            value: '114722',
            no: '114722',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '李乐静',
            value: '114725',
            no: '114725',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '刘鸿根',
            value: '114728',
            no: '114728',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '石溪',
            value: 'xi.shi',
            no: '114736',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '高一五',
            value: 'yiwu.yiwu',
            no: '114748',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '高一六20221102',
            value: 'yiliu.gao',
            no: '114749',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '高一七',
            value: 'yiqi.gao',
            no: '114750',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: 'hbx5',
            value: 'q.q01',
            no: '114793',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '消失2',
            value: 'shixiao',
            no: '114773',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '破皮4',
            value: 'pisi.po',
            no: '114783',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '笙笙',
            value: 'sehngsheng',
            no: '114779',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '简历一',
            value: 'xiaoxiaole',
            no: '114777',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '破皮2',
            value: 'pier.po',
            no: '114784',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '破破',
            value: 'popo.chen',
            no: '114785',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '扑扑',
            value: 'pupu',
            no: '114786',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '金蝶三',
            value: 'desan.jin',
            no: '114764',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: 'cs111',
            value: 'wq.a',
            no: '114787',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '汇报线1',
            value: 'asd.sad',
            no: '114788',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '高玉珍',
            value: 'yuzhen.gao',
            no: '114766',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: 'hbx3',
            value: 'ss.aa',
            no: '114790',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '杨九二',
            value: 'jiuer.yang',
            no: '114767',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '李云',
            value: 'yun.li02',
            no: '114797',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '郑凯',
            value: 'kai.zheng',
            no: '114798',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '赵凤英',
            value: 'fengying.zhao',
            no: '114799',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: 'hbx11',
            value: 'b.hbx',
            no: '114803',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '头像测试一',
            value: 'yiyiyi',
            no: '114805',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '史成',
            value: 'shi.cheng01',
            no: '114814',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '孙桂花',
            value: 'guihua.sun',
            no: '114824',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '彭玉',
            value: 'zhiping.zhang',
            no: '114821',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '胡路华',
            value: 'luhua.hu02',
            no: '114836',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '陈畅',
            value: 'chang.chen01',
            no: '114850',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '陈国锋',
            value: 'guofeng.chen',
            no: '115242',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
          {
            label: '罗书丹-公司负责人',
            value: 'shudan.luo',
            no: '2660',
            deptBusinessNo: 'D13528',
            deptName: '马上消费金融股份有限公司',
          },
        ],
      },
    });
  } else {
    res.send({
      status: 0,
      msg: '成功',
      data: {
        options: [
          {
            leftOptions: [
              {
                label: '马上消费金融股份有限公司',
                value: 'D13528',
                defer: true,
              },
              {
                label: '马上消费金融股份有限公司待封存',
                value: 'D13300',
                defer: true,
              },
              {
                label: '马上消费金融股份有限公司11',
                value: 'D13132',
                defer: true,
              },
              {
                label: '马上消费金融股份有限公司0.1',
                value: 'D12905',
                defer: false,
              },
              {
                label: '马上消费有限公司',
                value: 'D28312',
                defer: false,
              },
            ],
            children: [
              {
                ref: 'D13528',
                defer: true,
              },
              {
                ref: 'D13300',
                defer: true,
              },
              {
                ref: 'D13132',
                defer: true,
              },
              {
                ref: 'D12905',
                defer: false,
              },
              {
                ref: 'D28312',
                defer: false,
              },
            ],
            leftDefaultValue: 'D13528',
          },
        ],
      },
    });
  }
});

app.listen(4000, () => {
  console.log('server started at 4000');
});
