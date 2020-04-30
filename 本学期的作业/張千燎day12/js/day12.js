var arr = new Array(1,9,2,8,3,7,4,6,5);
var spare=0;


function Sort()
{
	for(var i = 0 ;  i < arr.length ; i++)
	{
		for(var j = 0 ; j <arr.length ; j++)
		{
			if(arr[i] > arr[j])
			{
				spare = arr[i];
				arr[i] = arr[j];
				arr[j] = spare;		
			}
		}	
	}
	for(var i = 0 ; i <= arr.length-1 ;i++)
	{
		document.write(arr[i]);	
	}
}

Sort();
