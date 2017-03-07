function logicalTwoNot()
{
	alert("!!'blue' = " + !!"blue");
	alert("!!0 = " + !!0);
	alert("!!NaN = " + !!NaN);
	alert("!!'' = " + !!"");
	alert("!!12345 = " + !!12345);
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

addLoadEvent(logicalTwoNot);