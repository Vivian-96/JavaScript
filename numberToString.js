function numberToString()
{
	var num = 10;
	alert("num = 10, num.toString() = " + num.toString());
    alert("num = 10, num.toString(2) = " + num.toString(2));
    alert("num = 10, num.toString(8) = " + num.toString(8));
    alert("num = 10, num.toString(10) = " + num.toString(10));
    alert("num = 10, num.toString(16) = " + num.toString(16));

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

addLoadEvent(numberToString);