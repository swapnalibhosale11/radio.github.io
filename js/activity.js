(function(app){
	$(document).ready(function(){

	$("a").bind("click",onLinkClick);
	})
	function onLinkClick(){
	console.log("hi");
		console.log("onLinkClick",$(this).attr("href"))
		$("#container1").html("wel"+$(this).text())
	}
})(player = player ||{});
var player;