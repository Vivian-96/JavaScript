function parseToFloat()
{
	var num1 = parseFloat("1234blue");
    alert("将字符串1234blue通过parseFloat函数转换的结果是" + num1);

    var num2 = parseFloat("0xA");
    alert("将十六进制数字0xA通过parseFloat函数转换的结果是" + num2);

    var num3 = parseFloat("22.5");
    alert("将22.5通过parseFloat函数转换的结果是" + num3);

    var num4 = parseFloat("22.34.5");
    alert("将字符串22.34.5通过parseFloat函数转换的结果是" + num4);

    var num5 = parseFloat("0908.5");
    alert("将字符串0908.5通过parseFloat函数转换的结果是" + num5);

    var num6 = parseFloat("3.125e7");
    alert("将字符串3.125e7通过parseFloat函数转换的结果是" + num6);
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

addLoadEvent(parseToFloat);