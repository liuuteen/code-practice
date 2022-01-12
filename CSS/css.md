# line-height 行高详解

line-height 也是行间距

由 上间距 + 文本高度 + 下间距 组成



## line-height 文字居中的原因

当行高 = 块元素高度时，上下间距会把文字挤到中间



# 三种 css 引入方式

## 1. 行内样式表（行内式）

html 元素标签使用 `style` 属性

```html
<div style="color:red; font-size: 12px;">
    test
</div>
```

## 2. 内部样式表（嵌入式）

在 `HTML` 中使用 `style` 标签

```html
<style> 
    div {
        color: pink;
    }
</style>
```

## 3. 外部样式表（外链式）

创建 css 文件，在 html 需要使用 `<link>` 标签引入文件

```html
<link rel="stylesheet" href="./index.css">
```

# Emmet 语法

一种代码补全语法，Vscode内置了



```js
// 生成html标签
div + tab
div*3 (3个div)
ul>li (包含)
div+p (兄弟)
.demo 
#id
自增符号$：
.demo$*3
<div class="demo1"></div>
<div class="demo2"></div>
<div class="demo3"></div>

生成内容
div{test}
```

## vscode 实现自动格式化代码

1. 文件 =》 首选项 =》 设置

2. 搜索 emmet.include

3. setting.json 里添加

   ```json
   "editor.formatOnType": true,
   "editor.formatOnSave": true
   ```

   

# 元素显示模式

## 块元素

`<p>, <div> <h1>~<h6>, <ul>, <ol>` 等

文字标签内不能放块元素
`<p>` 内不能放 `<div>`

## 行内元素

一行放多个，由文本内容大小决定元素的大小

## 行内块元素

**一行可以放多个**，并且可以设置容器的宽高

# 背景

## background-position

可以用来控制背景图片位置

```css
div {
    background-position: right center;
    /* 等效于 */
    background-position: right;
    
    background-positon: top;
    /* 等效于 */
    background-position: center top;
}
```

对应是 x轴 y轴

如果省略一个方位名词，则第二个默认居中对齐

# CSS3新增内容

## 背景色半透明 

```css
background: rgba(0, 0, 0, 0.5);
background: rgba(0, 0, 0, .5); // 省略0同样ok
```

盒子内得内容不受影响，只影响背景色。
