# Rongcapital UI

[![Build Status](https://travis-ci.org/WellerQu/rongcapital-ui.svg?branch=master)](https://travis-ci.org/WellerQu/rongcapital-ui)



```
                                                    __----~~~~~~~~~~~------___
                                   .  .   ~~//====......          __--~ ~~
                   -.            \_|//     |||\\  ~~~~~~::::... /~
                ___-==_       _-~o~  \/    |||  \\            _/~~-
        __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
    _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
  .~       .~       |   \\ -_    /  /-   /   ||      \   /
 /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
          '         ~-|      /|    |-~\~~       __--~~
                      |-~~-_/ |    |   ~\_   _-~            /\
                           /  \     \__   \/~                \__
                       _--~ _/ | .-~~____--~-/                  ~~==.
                      ((->/~   '.|||' -_|    ~~-/ ,              . _||
                                 -_     ~\      ~~---l__i__i__i--~~_/
                                 _-~-__   ~)  \--______________--~~
                               //.-~~~-~_--~- |-------~~~~~~~~
                                      //.-~~~--\
```

组件系统按行为分为视觉组件和视图组件. 视觉组件有可见外观, 尺寸, 前景色, 背景色等属性; 视图组件无视觉效果, 仅决定从属组件的布局方式. 采用属性继承的方式, 将数据仅向下传递. 本组件系统与业务无关, 但**仅为Cube服务**.

## 构建开发版本
`npm run release:dev` 生成开发版本

## 构建生产版本
`npm run release` 生成生产版本

## 启动开发服务
`npm run dev` 开始开发

## 工具

- [Enzyme](http://airbnb.io/enzyme/docs/api/index.html)
- [stroybook](https://storybook.js.org/)

## 其他依赖

- [core-decorator](https://github.com/jayphelps/core-decorators.js)

## Core components

**核心视图**组件, 无视觉效果, 但决定从属组件布局. 非常重要, 决定了后续其他 Base Components 的实现. 大约需要 **30** 人/日. 

- **View**
	基础视图组件
	
	- **NavigationView**
		有stack结构的视图组件
		
	- **ScrollableView**
		有滚动效果的视图组件
		
	- **CollectionView**
		单纯的无布局的容器组件, ListView, TableView, GridView均是具体实现
		
	- **ListView**
		CollectionView的一种具体实现, 有水平排列或垂直排列效果的视图组件
		
	- **GridView**
		CollectionView的一种具体实现, 网格布局视图组件
		
	- **DragDropView**
		可通过拖拽重新设置从属组件位置的视图组件

## Base components

**基础视觉**组件, 仅有外观, 无关布局的组件. 次等重要, 决定复杂 Business Components 的实现. 大约 **60** 人/日.

- **Breadcrumbs**
	面包屑视觉组件, 继承自ListView视图组件的高阶组件

- **ActionBar**
	应用标题视觉组件, 继承自ListView视图组件的高阶组件
	
	- **ActionBar.Item**
		ActionBar中的视图组件
		
	- **ActionBar.Separator**
		ActionBar中的分隔符视觉组件

- **SnakeBar**	
	窗口底部显示消息的视觉组件
	* 有 **左下角, 底部居中, 右下角** 三种定位选择;

- **SnakeBarGroup**
	管理多个SnakeBar的视图组件, 继承自ListView视图组件.
	* 有 **左下角, 底部居中, 右下角** 三种定位选择;

- **Menu**
	菜单视图组件. 继承自ListView视图组件
	
	- **Menu.Item**
		菜单项视觉组件, 集成自View视图组件

- **Loading**
    视觉组件, 显示加载中, 继承自View视图组件

- **LOGO**
	LOGO视觉组件, 继承自View视图组件

- **ICONS**
	各种ICON视觉组件, 继承自View视图组件. 计划采用阿里的开源[矢量图标集](http://www.iconfont.cn/) 
	* 有 **正常(默认), 禁用** 二种状态;
	* 有 **大, 中(默认), 小** 三种尺寸;
	* 有 **文案前置, 文案后置(默认), 不显示文案** 三种选择;

- **Image**
	图片视觉组件, 继承自View视图组件
	* 有 **顶部文案, 底部文案(默认), 不显示文案** 三种选择;
	* 有 **文案居左(默认), 文案居中, 文案居右** 三种选择;
	* 有 **水平填满, 垂直填满, 全部填满, 原图大小(默认)** 四种选择;

- **Label**
	标签视觉组件, 继承自View视图组件

- **Text**
	文案视觉组件, 继承自View视图组件
	* 有 **1 - 6** 个级别字体大小

- **Panel**
	面板容器视觉组件, 继承自View视图组件
	
	- **Panel.Header**
	- **Panel.Footer**
	- **Panel.Body**

- **Card**
	卡片容器视觉组件, 继承自Panel视觉组件

- **SidePanel**
	定位在窗体四周的边栏面板视觉组件, 继承自Panel视觉组件
	
- **Button** ( Large | Normal | Small | Primary | Second | Default | Disabled )
	按钮视觉组件, 继承自View视图组件
	* 有 **正常, 点击, 悬停, 禁用** 四种样式;
	* 有 **矩形, 圆形** 二种样式;
	* 有 **主要, 次要, 默认** 三种样式;
	
- **ButtonGroup** 
	按钮组视图组件, 用于管理按钮视觉组件. 继承自ListView视图组件.
	
	- **ButtonGroup.Separator**
		按钮组分隔符视觉组件, 继承自View视图组件.

- **Form**
	表单视图组件, 没有继承自任何组件的高阶组件, 依据表现形式组装从属组件.
	* 有 **水平, 垂直, 网格** 三种表现形式;
	* 发起从属组件内容验证
	
- **InputText**
	文本框视觉组件, 继承自View视图组件
	* 被动触发内容验证;
	* 有Placeholder;
	
- **Checkbox**
	复选框视觉组件
	* 被动触发内容验证;
	
- **CheckboxGroup**
	管理复选框的复选框组视图组件, 继承自ListView视图组件
	* 有 **多选, 单选** 二种模式;
	* 被动触发内容验证;
	
- **DropdownList**
	下拉菜单组件, 继承自ListView视图组件
	* 被动触发内容验证

- **Dialog**
	弹出窗口视觉组件, 继承自Panel视觉组件
	* 有 **模态, 非模态** 二种模式;

	- **Dialog.Header**
	- **Dialog.Footer**
	- **Dialog.Body**

- **CoverLayer**
	遮罩层视觉组件, 继承自View视图组件

- **Chart**
	图表视觉组件, 继承自View视图组件, 计划继续使用ECharts

- **Calendar**( Date | Time | DateTime )
	日历视觉组件, 继承自View视图组件
	* 有 **日期模式, 时间模式, 完全模式** 三种模式;

- **Editor**
	编辑器视觉组件, 继承自View视图组件

## Business Components

大约 **5** 人日

- **TreeTable**
	树形表视觉组件

- **Drag & Drop**
	可拖拽视觉组件, 继承自DragDropView视图组件

## TODO

- remove `core-decorator`
- fix errors in navigationView.spec.js
