var date = new Date();

function obtainDateHours()
{
	document.write(date.getFullYear()+"-");
	document.write(date.getMonth()+"-");
	document.write(date.getDate());
	document.write("&nbsp;&nbsp;");
	document.write(date.getHours()+":");
	document.write(date.getMinutes()+":");
	document.write(date.getSeconds());
	document.write("</br>");	
}

obtainDateHours();


//這個算法是我百度上找的 感覺我自己的有點蠢
function randomNum()
{
	var Min=2;   //最小值
	var Max=10;	//最大值
	document.write("算法：");
	document.write(Math.floor(Math.random()*(Max-Min+1))+Min);  //用random的隨機數*（所需最大值減去所需最小值+1）+最小值	
	document.write("</br>");	
}
randomNum();


//這個是我自己想的  測試了一下我這個是不可行的 但是可以留下來做個紀念 因爲在三目判斷的變量後面加上字符串有時候他會得到一個奇怪的值
function twoRandoNum()
{
	var a = Math.floor(Math.random()*10)+2;  //用random*10取0~9的整數 然後+2 所得到的最小是2最大值是11
	document.write("三目判斷：");
	a <11 ? document.write(a) : document.write(a-1);  //運用三目運算符來判斷我不需要的最大值減掉1
}
twoRandoNum();