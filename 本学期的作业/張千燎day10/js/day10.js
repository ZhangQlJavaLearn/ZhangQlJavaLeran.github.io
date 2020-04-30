function getNumber()
{
	var y=0;
	for(var x = 0 ; x<10 ; x++)
	{
		y+=1;	
	}
	document.write(y+"</br>");	
}
getNumber();

function getYouNumber(numberOne,numberTwo)
{
	var sum=0;
	for(numberOne; numberOne<numberTwo ; numberOne++)
	{
		sum+=1;	
	}	
	document.write(sum+"</br>");
}
getYouNumber(1,100);

function getReturn()
{
	var y=0;
	for(var x = 0 ; x < 10; x++)
	{
		y+=1;		
	}	
	return y;
}
var sum = getReturn();
document.write(sum);