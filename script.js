
// function to load in starting screen
function loadFunction() {
    $("#title").css("opacity","100");
}

// tracks when starting screen loads, transitions in button
const end = document.querySelector('#title');

end.addEventListener('transitionend', () => {
  $("#begin").css("display","block")
});


// begin button clicked
function BEGIN() {
    $("#begin").css("display","none");
    $("#title").css("display","none");
    loadPlanets();
}

// loads in planets
function loadPlanets(){
	console.log("load");
	$("#Mercury").removeClass("visible");
	$("#Venus").removeClass("visible");
	$("#Earth").removeClass("visible");
	$("#Mars").removeClass("visible");
	$("#Jupiter").removeClass("visible");
	$("#Saturn").removeClass("visible");
	$("#Uranus").removeClass("visible");
	$("#Neptune").removeClass("visible");
	$("#Sun").removeClass("visible");
	$(".text").css("display","none");
	$(".pickAPlanet").css("display","block");
	$(".pickAPlanet").css("width","");
	$(".actual").css("display","grid");
}

//Mercury

function Mercury(){
	$(".actual").css("display","block");
	$(".1").css("display","none");
	$("#Mercury").css("width","50vw")
	$("#Mercury").css("margin","auto");
	$("#merctext").css("display","block");
	$("#Mercury").addClass("visible");
}

//Venus

function Venus(){
	$(".actual").css("display","block");
	$(".2").css("display","none");
	$("#Venus").css("width","50vw")
	$("#Venus").css("margin","auto");
	$("#ventext").css("display","block");
	$("#Venus").addClass("visible");
}

//Earth

function Earth(){
	$(".actual").css("display","block");
	$(".3").css("display","none");
	$("#Earth").css("width","50vw")
	$("#Earth").css("margin","auto");
	$("#eartext").css("display","block");
	$("#Earth").addClass("visible");
}


//Mars

function Mars(){
	$(".actual").css("display","block");
	$(".4").css("display","none");
	$("#Mars").css("width","50vw")
	$("#Mars").css("margin","auto");
	$("#marstext").css("display","block");
	$("#Mars").addClass("visible");
}

//Jupiter

function Jupiter(){
	$(".actual").css("display","block");
	$(".5").css("display","none");
	$("#Jupiter").css("width","50vw")
	$("#Jupiter").css("margin","auto");
	$("#juptext").css("display","block");
	$("#Jupiter").addClass("visible");
}

//Saturn

function Saturn(){
	$(".actual").css("display","block");
	$(".6").css("display","none");
	$("#Saturn").css("width","50vw")
	$("#Saturn").css("margin","auto");
	$("#sattext").css("display","block");
	$("#Saturn").addClass("visible");
}

//Uranus

function Uranus(){
	$(".actual").css("display","block");
	$(".7").css("display","none");
	$("#Uranus").css("width","50vw")
	$("#Uranus").css("margin","auto");
	$("#urtext").css("display","block");
	$("#Uranus").addClass("visible");
}

//Neptune

function Neptune(){
	$(".actual").css("display","block");
	$(".8").css("display","none");
	$("#Neptune").css("width","50vw")
	$("#Neptune").css("margin","auto");
	$("#Neptune").prop("opacity","100%");
	$("#neptext").css("display","block");
	$("#Neptune").addClass("visible");
}

function Sun(){
	$(".actual").css("display","block");
	$(".9").css("display","none");
	$("#Sun").css("width","50vw")
	$("#Sun").css("margin","auto");
	$("#suntext").css("display","block");
	$("#Sun").addClass("visible");
}

function exit(){
	$(".text").css("display","none");
	$(".actual").css("display","none");
	$("#END").css("display","block");
	$("#END").css("opacity","100%");
}
