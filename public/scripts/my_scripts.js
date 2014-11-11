$(document).ready(function() {
	dialog_boxes();

	$(function() {
		$('#panel1Link').on("click", function() {
			//$('#panel1Content').dialog("open");
			scrollToAnchor('skills');
		});
	})	

	$(function() {
		$('#panel2Link').on("click", function() {
			//$('#panel2Content').dialog("open");
			scrollToAnchor('travel');
		});		
	})

	$(function() {
		$('#panel3Link').on("click", function() {
			//$('#panel3Content').dialog("open");
			scrollToAnchor('music');
		});		
	})

	$(function() {
		$('#panel4Link').on("click", function() {
			//$('#panel4Content').dialog("open");
			scrollToAnchor('wine');
		});		
	})
	
	$(function() {
		$('.homeLink').on("click", function() {
			//$('#panel4Content').dialog("open");
			scrollToAnchor('home');
		});		
	})
});

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function dialog_boxes() {
	for(var i = 1; i < 5; i++){
		var hook = 'panel' + i + 'Content';
		$('#' + hook).dialog({
			autoOpen: false,
			height: 650,
			width: 700,
			modal: true,
		});		
	}	
};