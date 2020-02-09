
var absoluteAnswear = 0;

var countTheAnswear = function() {
	
	var month = document.getElementById('month').value;
	var area = document.getElementById('area').value;
	var yacht = document.getElementById('yacht').value;
	var standard = document.getElementById('standard').value;
	
	var monthError = document.getElementById('monthError');
	var areaError = document.getElementById('areaError');
	var yachtError = document.getElementById('yachtError');
	var standardError = document.getElementById('standardError');
	
	var flag = 0;
	
	if(month == 0)
	{
		monthError.innerHTML = "Wybierz miesiąc";
		flag = 0;
	}
	else
	{
		monthError.innerHTML = "";
		flag = 1;
	}
	
	if(area == 0)
	{
		areaError.innerHTML = "Wybierz rejon";
		flag = 0;
	}
	else
	{
		areaError.innerHTML = "";
		flag = 1;
	}
	
	if(yacht == 0)
	{
		yachtError.innerHTML = "Wybierz jacht";
		flag = 0;
	}
	else
	{
		yachtError.innerHTML = "";
		flag = 1;
	}
	
	if(standard == 0)
	{
		standardError.innerHTML = "Wybierz standard";
		flag = 0;
	}
	else
	{
		standardError.innerHTML = "";
		flag = 1;
	}
	
	//parameters are correct than calculate
	if(flag == 1)
	{
		var answear = 0;


		//december-march
		if((month < 4 && month > 0) || month == 12)
			answear = 1000;
		//april-september
		else if (month < 10 && month > 3)
			answear = 1500;
		//october-november
		else if (month < 12 && month > 9)
			answear = 1100;
		
		
		//Croatia
		if (area == 1) answear += 600;
		//Greecr
		else if (area == 2) answear += 400;
		//Italy
		else if (area == 3) answear += 200;
		//Spain
		else if (area == 4) answear += 700;
		//Montenegro
		else if (area == 5) answear += 300;
		//France
		else if (area == 6) answear += 750;
		
		
		//sail
		if(yacht == 1) answear += 300;
		//engine
		else if(yacht == 2) answear += 600;
		//catamaran
		else if(yacht == 3) answear += 400;
		
		
		//economic
		if(standard == 1) answear *= 1;
		//premium
		else if(standard == 2) answear*= 2;

		var finalAnswear = document.getElementById('answear');
		finalAnswear.innerHTML = (answear + " euro");
		
		absoluteAnswear = answear;
		//finalAnswear.setAttribute("value", answear);
		//alert(answear.value);
	}
		
}


var toEuro = function() {
	
	answear = document.getElementById("answear");
	answear.innerHTML = (absoluteAnswear + " euro");
}

var toZloty = function() {

	answear = document.getElementById("answear");
	answear.innerHTML = (absoluteAnswear*4 + " zł");
}