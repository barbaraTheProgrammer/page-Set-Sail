	
var printMessage = function() {
	var name = document.getElementById('name').value;
	var mail = document.getElementById('mail').value;
	var message = document.getElementById('message').value;
	
	var nameError = document.getElementById('nameError');
	var mailError = document.getElementById('mailError');
	var messageError = document.getElementById('messageError');
	
	var haveAt = 0;
	var at = "@";
	var flag = 0;
	
	if(name.length < 3)
	{
		nameError.innerHTML = "Błąd, zbyt krótkie imię (min. 3 znaki)";
		flag = 0;
	}
	else
	{
		nameError.innerHTML = "";
		flag = 1;
	}
	
	if((haveAt = mail.includes(at)) != true)
	{
		mailError.innerHTML = "Brak znaku '@' w adresie e-mail";
		flag = 0;
	}
	else
	{
		mailError.innerHTML = "";
		flag = 1;
	}
	
	if(message.length < 1)
	{
		messageError.innerHTML = "Wiadomość musi coś zawierać";
		flag = 0;
	}
	else
	{
		messageError.innerHTML = "";
		flag = 1;
	}
	
	if(flag == 1)
		alert("Wiadomość wysłano");
	
}