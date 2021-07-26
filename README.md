
## di-component
Di 是 `DataInput`缩写，代表数据录入组件，以Di开头的都是一系列录入组件的实现

##### 本组件是基于antd 4.16.8 版本做的封装，别的版本暂不支持
这里也没什么高深的技术，主要思想是把部分组件作为属性再次封装一下，方便使用：
<br/>

for example：

1.antd的Form表单，需要根据他规定的格式编码，比较繁琐，比如必填项需使用以下代码：
```
<Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
```
使用di-component只需要引入包名，并新增两个属性即可
```
import DiInput from './di-component/DiInput';
...

<DiInput pre required />
```
并且大多数属性都可以继承，并新增了部分自定义的属性，如isSearch={true}时可增加
<br/>
Search图标和按下回车的回调

2.录入数据的功能，将数据按照规定的格式封装好放入data属性中，可以直接生成，并且封装了
<br/>
多层Select的级联选项

```
const options = [
  { value: 0, label: 'options1' },
  { value: 1, label: 'options2' },
  { value: 2, label: 'options3' },
];

...

<DiSelect data={options} />
```
#### 初次发文，请多多支持，star一下~

