var varible=0;

while(varible++ < 100) //循環次數  自增
{
	if(varible%2==0 && varible%3==0) //判斷是否符合條件如果是就輸出
	{
		document.write(varible+"</br>");	
	}
		
}

for(var x=1; x < 10; x++) //控制總次數
{
	for(var y=1 ; y <= x ; y++) //控制每一次循環的次數
	{
		document.write(y+"*"+x+"="+(x*y));  //顯示結果
		document.write("&nbsp;&nbsp;&nbsp;"); //空額
	}
	document.write("</br>")	//每次循環完都換一次行
}