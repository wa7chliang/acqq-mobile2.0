# acqq-mobile2.0
使用Vue2.0重写acqq详情页的简单单页面应用

## 项目运行

### 安装依赖
```
npm install
```

### 打开项目
```
npm run dev
```
默认端口为8080

### 改进
```
<keep-alive>
   <router-view></router-view>
</keep-alive>
```
在<router-view>标签外面包上一个<keep-alive>标签
当数据加载完后,在路由切换的时候页面不再重新跳转.

### 小bug
在第一次运行进行路由切换的时候页面都会出现重新跳转.
