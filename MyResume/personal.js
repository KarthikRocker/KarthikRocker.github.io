$(document).ready(function(){
   // convert user input value into date object
	 var birthDate = new Date("1990-03-30");
	  console.log(" birthDate"+ birthDate);
	 
	 // get difference from current date;
	 var difference=Date.now() - birthDate.getTime(); 
	 	 
	 var  ageDate = new Date(difference); 
	 var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
	for(let index = 0; index < document.getElementsByClassName("age").length; index++) {
		document.getElementsByClassName("age")[index].innerHTML = calculatedAge;
	}
});
