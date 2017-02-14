1.	当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model），HTML DOM模型被构造为对象的树。
2.	通过可编程的对象模型，JavaScript获得了足够的能力来创建动态的HTML：
a)	JavaScript能够改变页面中所有的HTML元素；
b)	JavaScript能够改变页面中所有的HTML属性；
c)	JavaScript能够改变页面中所有的CSS样式；
d)	JavaScript能够对页面中的所有事件做出反应。
3.	通过JavaScript来操作HTML元素，为了达到这个目的，必须首先找到该元素。有三种方法来做这件事：
a)	通过ID找到HTML元素；
b)	通过标签名找到HTML元素；
c)	通过类名找到HTML元素。
4.	在W3School的HTML DOM教程中，主要内容包括：
a)	如何改变HTML元素的内容（innerHTML）；
b)	如何改变HTML元素的样式（CSS）；
c)	如何对HTML DOM事件做出反应；
d)	如何添加或删除HTML元素。
5.	HTML DOM允许JavaScript改变HTML元素的内容。JavaScript能够创建动态的HTML内容，在JavaScript中，document.write()可用于直接向HTML输出流写内容。
6.	绝不要使用在文档加载之后使用document.write()，这会覆盖该文档。
7.	在HTML DOM中，JavaScript通过以下三种方式来改变HTML的内容：
	- 改变HTML输出流；
	- 改变HTML内容；
	- 改变HTML属性；
8.  HTML DOM允许JavaScript改变HTML元素的样式。
9.  HTML DOM使JavaScript有能力对HTML事件做出反应。
10. 我们可以在事件发生时执行JavaScript，HTML事件的例子：
	- 当用户点击鼠标时；
	- 当网页已加载时；
	- 当图像已加载时；
	- 当鼠标移动到元素上时；
	- 当输入字段被改变时；
	- 当提交HTML表单时；
	- 当用户触发按键时。
11. **onload和onunload**事件会在用户进入或离开页面时被触发。onload事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确版本。onload和onunload事件可用于处理cookie。
12. **onchange事件**常结合对输入字段的验证来使用。
13. **onmouseover和onmouseout**事件可用于在用户的鼠标移至HTML元素上方或移出元素上方时触发函数。
14. **onmousedown,onmouseup以及onclick**构成了鼠标点击事件的所有部分。首先当点击鼠标按钮时，会触发onmousedown事件，当释放鼠标按钮时，会触发onmouseup事件，最后，当完成鼠标点击时，会触发onclick事件。
15. 使用JavaScript可以向HTML文档中添加或删除元素。
16. **HTML DOM**定义了访问和操作HTML文档的标准。
17. 什么是**DOM**？**DOM**定义时W3C（万维网联盟）的标准。DOM定义了访问HTML和XML文档的标准：W3C文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。
18. **W3C DOM标准分为三个部分：**
	- 核心DOM-针对任何结构化文档的标准模型；
	- XML DOM-针对XML文档的标准模型；
	- HTML DOM-针对HTML文档的标准模型。
19. HTML DOM是：
	- HTML的标准对象模型
	- HTML的标准编程接口
	- W3C标准
20. HTML DOM定义了所有HTML元素的对象和属性，以及访问它们的方法。换言之，HTML DOM是关于如何获取、修改、添加或删除HTML元素的标准。
21. 在HTML DOM中，**所有事物都是节点**。
22. 根据W3C的HTML DOM标准，HTML文档中的所有内容都是节点：
	- 整个文档时一个文档节点
	- 每个HTML元素是元素节点
	- HTML元素内的文本是文本节点
	- 每个HTML属性是属性节点
	- 注释是注释节点
23. **HTML DOM方法**：方法是我们可以在节点（HTML元素）上执行的动作。
24. 所有HTML元素被定义为对象，而编程接口则是对象方法和对象属性。方法是您能够执行的动作（比如添加或修改元素），属性是您能够获取或设置的值（比如节点的名称或内容）。
25. innerHTML属性可用于取或改变任意HTML元素，包括<html>和<body>。
26. DOM元素等同于访问节点，可以用三种方式来访问HTML元素：
	- 通过使用getElementById()方法；
	- 通过使用getElementsByTagName()方法；
	- 通过使用getElementsByClassName()方法。
27. 修改HTML DOM意味着许多不同的方面：
	- 改变HTML内容
	- 改变CSS样式
	- 改变HTML属性
	- 创建新的HTML元素
	- 删除已有的HTML元素
	- 改变事件（处理程序）
28. 改变元素内容最简单的方法是使用innerHTML属性。
29. 通过HTML DOM，能够使用节点关系在节点树中导航。你可以使用三个节点属性：parentNode,firstNode以及lastChild，在文档结构中进行导航。
30. 有两个特殊的属性，可以访问全部文档：
	- document.documentElement-全部文档
	- document.body-文档的主体
31. 除了innerHTML属性，也可以使用childNodes和nodeValue属性来获取元素的内容。
32. 所谓的**动态网页**，是指跟静态网页相对的一种网页编程技术。静态网页，随着HTML代码的生成，页面的内容和显示效果就基本上不会发生变化了---除非修改页面代码。而动态网页则不然，页面代码虽然没有变，但是显示的内容却是可以随着时间、环境或数据库操作的结果发生改变的。
33. **URL**，全称为Uniform Rosource Locator,统一资源定位符，又叫做网页地址，是互联网上标准的资源的地址。互联网上的每个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。统一资源定位符的开始，一般会标志着一个计算机网络所使用的网络协议。
34.  

