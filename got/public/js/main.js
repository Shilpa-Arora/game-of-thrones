// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF fired");
	var request;
	var request1;
	var content = document.querySelector("#characters");
	var info = document.querySelector("#detail");
var house1 = document.querySelector("#house1");
var house2 = document.querySelector("#house2");
	function showCharactersList(){
		request = create();
			
		if(request===null){
			alert("You are using outdated browser");
			return;
		}

		var url="jsonList";//this would point to the route in laravel
		
		request.onreadystatechange=stateChangedList;
		request.open("GET", url, true);
		request.send(null);

	}
function stateChangedList(){
	if(request.readyState===4 || request.readyState==="complete"){
createList(request);

}
}

function createList(request){

	var charnames = JSON.parse(request.responseText);


	for (var i=0; i<charnames.length; i++){

		content.innerHTML += '<li><a href="#" data-charid="'+charnames[i].id+'">'+charnames[i].name+'</a></li><hr>';

	}
	var anchors = content.querySelectorAll("a");
	console.log(anchors);
	for (var i=0; i <anchors.length; i++) {

		anchors[i].addEventListener("click", charDetail, false);
	}
}

function charDetail(e) {
	console.log("details called");
	console.log(e.currentTarget.dataset.charid);
	e.preventDefault();
	var id = e.currentTarget.dataset.charid;
	request1 = create();
	if(request===null){
		alert("browser outdated");
return;
	}
	var url = "jsonList/"+id;
	request1.onreadystatechange=stateChangedInfo;
	request1.open("GET",url,true);
	request1.send(null);
}
function stateChangedInfo(){
	if(request1.readyState===4 || request1.readyState==="complete"){
showInfo(request1);
	}
}
function showInfo (request1) {

	var detail = JSON.parse(request1.responseText);
console.log(detail);
house1.innerHTML ='<img id="banner" src="images/'+detail[0].banner+'" alt="img of the house missing">'+
'<img id="banner" src="images/'+detail[0].banner+'" alt="img of the house missing">'+
'<img id="banner" src="images/'+detail[0].banner+'" alt="img of the house missing">';

house2.innerHTML ='<img id="banner" src="images/'+detail[0].banner+'" alt="img of the house missing">'+
'<img id="banner" src="images/'+detail[0].banner+'" alt="img of the house missing">'+
'<img id="banner" src="images/'+detail[0].banner+'" alt="img of the house missing">';

	info.innerHTML =

	"<br><h2>"+detail[0].name+"</h2>"+'<img id="person" src="images/'+detail[0].img+'" alt="img missing">'+"<h2>House: "+detail[0].house+"</h2>"+"<p>-"
	+detail[0].words+"</p><p><h3>Biography</h3>"+detail[0].bio+"</p>";}




showCharactersList();
})();