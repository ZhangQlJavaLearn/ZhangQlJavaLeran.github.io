var str="Hello World";
var total=0;
var Times=1;

function times()
{
	for(var i=0 ; i  < str.length ; i++)
	{
		if(str.charAt(i) == "l")
		{
			document.write("第"+Times+"的位置:"+i);
			total+=1;
			Times+=1;
			document.write("</br>");	
		}	
		
	}
	document.write("</br>");
	document.write("總共出現的次數："+total);
}

times();