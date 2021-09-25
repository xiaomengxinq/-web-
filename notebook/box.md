# 盒子
## 块级盒子-block box
### 特点
1.与父容器同宽  
2.换行  
3.存在width height属性   
4.内边距（padding）, 外边距（margin）和边框（border）会将其他元素从当前盒子周围“推开”  
5.标题段落默认为快级
## 内联盒子-inline box
### 特点
1.不换行  
2.不存在width height属性  
3.垂直不推水平推（其他元素）  
4.用做链接的 <a></a> 元素、 <span></span> 、 <em></em>以及 <strong></strong> 都是默认处于 inline 状态
## display属性
值 inline、block
display: inline-block  
1.不换行  
2.存在width、height属性  
3.会推开其他元素
## 盒模型
### 盒模型的各个部分 ps替代和模型（没看）
CSS中组成一个块级盒子需要:
1.Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.  
2.Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。  
3.Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。  
4.Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。  
如下图:![盒模型](https://media.prod.mdn.mozit.cloud/attachments/2019/03/19/16558/29c6fe062e42a327fb549a081bc56632/box-model.png)  
content box。、padding 和 border 再加上设置的宽高一起决定整个盒子的大小。
## 外边距-margin
分别设置四边margin-top/bottom/right/left.边框-border 内边距-padding同理  
外边距相接，取最大值。
## 边框-border
颜色、样式、宽度：border-color/style/width.  
更具体 border-top-style 排列组合

