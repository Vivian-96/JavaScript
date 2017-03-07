function parseInteger()
{
	var num1 = parseInt("1234blue");
	alert("字符串1234blue通过parseInt函数转化为数字是" + num1); 

	var num2 = parseInt("");
	alert(" 空格通过parseInt函数转化为数字是" + num2);

	var num3 = parseInt("0xA");
	alert("十六进制数字0xA通过parseInt函数转化为数字是" + num3);

	var num4 = parseInt(22.5);
	alert("浮点数22.5通过parseInt函数转化为数字是" + num4);

	var num5 = parseInt("070");
	alert("八进制数字070通过parseInt函数转化为数字是" + num5);

	var num6 = parseInt(70);
	alert("十进制数字70通过parseInt函数转化为数字是" + num6);

	var num7 = parseInt("0xf");
	alert("十六进制数字0xf通过parseInt函数转化为数字是" + num7);
}

function addLoadEvent(func)
{
	var oldonload = window.onload;
	if (typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else
	{
		window.onload = function()
		{
			oldonload();
			func();
		}
	}
}

addLoadEvent(parseInteger);