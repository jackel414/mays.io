$(document).ready(function() {
	dialog_boxes();

	$(function() {
		$('#panel1Link').on("click", function() {
			$('#panel1Content').dialog("open");
		});		
	})
	$(function() {
		$('#panel2Link').on("click", function() {
			$('#panel2Content').dialog("open");
		});		
	})
	$(function() {
		$('#panel3Link').on("click", function() {
			$('#panel3Content').dialog("open");
		});		
	})
	$(function() {
		$('#panel4Link').on("click", function() {
			$('#panel4Content').dialog("open");
		});		
	})
});

function dialog_boxes() {
	for(var i = 1; i < 5; i++){
		var hook = 'panel' + i + 'Content';
		$('#' + hook).dialog({
			autoOpen: false,
			height: 300,
			width: 400,
			modal: true,
			buttons: {
				Search: function() {
					$(this).find("form").submit();
				},
				Cancel: function() {
					$(this).dialog("close");
				}
			}
		});		
	}	
};