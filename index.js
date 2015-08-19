var animation = true;

$(document).ready(function () {
	if(animation){
		$("#welcome-background").addClass("visible");
		setTimeout(function(){

			//animate welcome text
			$("#welcome-typewriter-text-large").typed({
				strings: ["Hi there, ^500 I'm Michael. ^1000 <br> I design stuff. ^1000"],
				typeSpeed: 1,
				showCursor: false
			});


			setTimeout(function(){
				$("#welcome-typewriter-text-small").addClass("visible");
				
				//animate menu items/rest of home page
			}, 4500);

		}, 1000);
	}else{
		noAnimation();
	}
});

function createHomepageUIElements(){
	$("#homepage-ui-elements").addClass("visible");
}

function noAnimation(){
	$("#welcome-background").addClass("visible");
	$("#welcome-typewriter-text-small").addClass("visible");
	$("#homepage-ui-elements").addClass("visible");
}