function parseIntWithTwoArgs()
{
	var num1 = parseInt("0xAF",16);
	alert("将十六进制数字0xAF转化为十进制数字是" + num1);

	var num2 = parseInt("AF",16);
	alert("将不带前缀0x的十六进制数字AF转换为十进制数字是" + num2);

	var num3 = parseInt("AF");
	alert("将不带前缀的十六进制数字转换为不指定基数的数字结果是" + num3);

	alert("指定基数会影响转换的输出结果，如下：");

	var num4 = parseInt("10",2);
	alert("将10按二进制解析，其结果是" + num4);

	var num5 = parseInt("10",8);
	alert("将10按八进制解析，其结果是" + num5);

	var num6 = parseInt("10",10);
	alert("将10按十进制解析，其结果是" + num6);

	var num7 = parseInt("10",16);
	alert("将10按十六进制解析，其结果是" + num7);
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

addLoadEvent(parseIntWithTwoArgs);