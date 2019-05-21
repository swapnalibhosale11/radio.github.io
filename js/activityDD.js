$(document).ready(function(){
	console.log("k");
	$(".submitBtn").bind("click",submitQuiz);
	$(".resetBtn").bind("click",resetQuiz);
	$(".close").bind("click",closePopup)
	
	for(var i=1 ; i<4; i++){

	// $(".quiz").append('<div class="outerclsIp"><img src="./images/stroke'+i+'.png"/><input class="inputCls" list="numList'+i+'" id="inputId'+i+'" type="text" data-ans="'+data.ans[i-1]+'"></input><div class="feedback"></div></div>');
	$(".quiz").append('<div class="outerclsIp"><img src="./images/stroke'+i+'.png"/><input class="inputCls" list="numList'+i+'" id="inputId'+i+'" type="text" data-ans="'+data.ans[i-1]+'"></input><div class="numList"></div><div class="feedback"></div></div>');
	}
	$(".numList").append('<span class="numtext">1</span><span class="numtext">2</span><span class="numtext">3</span>')
	$(":input").bind("keyup change", onChangeInput)
	$(":input").bind("keyup click", dropdownPopoup);
	$(".numtext").bind("click",numtextClk);
})

function numtextClk(){
	$(this).parent().parent().find("input").val($(this).text());
	$(".numList").hide();
	onChangeInput();
}
function dropdownPopoup(){
	$(".numList").hide();
	$(this).parent().find(".numList").show();
}
function submitQuiz(){
	var correctCount = 0;
	$("input").each(function(){
		if($(this).val() == $(this).attr("data-ans")){
			$(this).parent().find(".feedback").addClass("correctFB");
			correctCount++;
		}else{
			$(this).parent().find(".feedback").addClass("incorrectFB");
		}
	})
	if(correctCount == $("input").length){
	// if(correctCount == 1){
		console.log("al correctCount");
		$(".popup .text").html("All correct!!")
	}else{
		$(".popup .text").html("incorrect!!")
	}
		$(".popup").show();
		$(".popup").animate({
   		   left: '200px',
   		   top:'100px'
    });
	$(this).attr("disabled","disabled")
}
function onChangeInput(){
	var count = 0;
	$("input").each(function(){
		if($(this).val() !=""){
			count++;
		}
	})
	//if(count == $("input").length){
	if(count > 0){
		$(".submitBtn").removeAttr("disabled");
	}else{
		$(".submitBtn").attr("disabled","disabled");
	}
}

function closePopup(){
	$(".popup").hide();
	$(".resetBtn").removeAttr("disabled");
}
function resetQuiz(){
	console.log("in rest")
	$("input").each(function(){
		$(this).val("");
	})
	$(".feedback").removeClass("correctFB");
	$(".feedback").removeClass("incorrectFB");
	$(this).attr("disabled","disabled")
}