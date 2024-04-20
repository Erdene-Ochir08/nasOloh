// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// define/vvsgeh -> function funcName(){}
// call/ajluulah -> funcName();
// argument/parametr -> function-iin avah utga
function hello(name,age){
	console.log("Hello My name is "+ name + ".");
	console.log("How are you?. I am " + age + " years old");
}
hello("Erdene-Ochir",24);
hello("Suvd",33);

// 2 тооны нийлбэр олох функц бичнэ үү
function niilber(too1,too2){
	console.log(too1+too2);
}
niilber(5,10);
niilber(4564536,6546846);
// Тооны квадрат зэрэг олдог функц бичнэ үү
// 7 = 7*7, 8=8*8
function kvadrat(too){
	console.log(too*too);
}
kvadrat(8);
kvadrat(10);
// Нас оруулахад насанд хүрсэн эсэхийг олох функц бичнэ үү
// 16-> nasand hureegui,  25-> nasand hursen
function nas(age){
	if(age>17){
		console.log("Nasand hursen");
	}else{
		console.log("Nasand hureegui");
	}
}
nas(16);
nas(25);
// Тоо 100-аас их байвал 10-д үржүүлнэ, 100-аас бага байвал 10-ыг нэмэх функ бичнэ үү 

// DOM => document : html deer bga bvh kod
console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// varName.style.styleName = "value/utga";
h1.style.color = "red";
// varName.innerText = "dotorh text-iig uurchlunu";
h1.innerText = "Sain uu";
var h1_2 = document.getElementsByTagName('h1')[1];
function changeColor(){
	h1_2.style.color="green";
	h1_2.innerText = "Changed";
}
var h2 = document.getElementsByTagName('h2')[0];
function change(){
	h2.style.color="blue";
	h2.innerText="text changed";
}

var input = document.getElementsByTagName('input')[0];
var p = document.getElementsByTagName('p')[0];
function birthYear(){
	// 2024 - input.value -> input deer bichsen utga
	if(input.value==""){
		alert("Cannot be empty");
	}else if(input.value>130){
		p.innerText="Hvn iim naslah bolomjgui";
		p.style.color="red";
	}
	else{
		var year = 2024 - input.value;
		p.innerText ="Your birth year: " + year + ". Ta 10 jiliin daraa " + ( parseInt(input.value) +10);
	}
}
// 1. 130 дээш нас оруулвал улаан өнгөөр Хүн ийм наслах боломжгүй
// 2. 0-ээс бага тоо оруулвал шар өнгөөр Та төрөөгүй байна
// 3. 10 жилийн дараах насыг гаргаж ирэх