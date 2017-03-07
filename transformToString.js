function transformToString()
{
	var age = 11;
	var ageAsString = age.toString();
	alert("将数字11通过toString方法转换成字符串的结果是" + ageAsString);
    
    var found = true;
    var foundAsString = found.toString();
    alert("将Boolean型变量found通过toString()方法转换成字符串的结果是"
    	 + foundAsString);
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

addLoadEvent(transformToString);