function functionOfString()
{
	var value1 = 10;
	var value2 = true;
	var value3 = null;
	var value4;

	alert("value1 = 10, String(value1) = " + String(value1));
	alert("value2 = true, String(value2) = " + String(value2));
	alert("value3 = null, String(value3) = " + String(value3));
	alert("value4 has no value, String(value4) = " + String(value4));
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

addLoadEvent(functionOfString);