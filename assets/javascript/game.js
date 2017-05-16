		$(document).ready(function() {
		function reset() {

		number = Math.floor((Math.random() * 120) + 19);
		$('#randomnumber').text(number);
		
		jem1 = Math.floor((Math.random() * 12) + 1);
		
		jem2 = Math.floor((Math.random() * 12) + 1);
		
		
		jem3 = Math.floor((Math.random() * 12) + 1);
		
						
		jem4 = Math.floor((Math.random() * 12) + 1);
	
		
		total = 0;
	 	$("#totalscore").html(total);
		}

		var number;
		var jem1;
		var jem2;
		var jem3;
		var jem4;
		var total = 0;
		var winCounter = 0;
		var loseCounter = 0;

		
		
		reset();	
		$("#jem1").val(jem1);
		$("#jem2").val(jem2);
		$("#jem3").val(jem3);
		$("#jem4").val(jem4);
		
		$("button").click(function() {
			console.log(this);
			total = parseInt(total) + parseInt($(this).val());  
			$("#totalscore").html(total);
			
			if (total == number) {
			winCounter++;
			$("#wins").html("Wins: " + winCounter);
			setTimeout(reset, 1000);
			} else if (total > number) {
    		loseCounter++;
			$("#losses").html("Losses: " + loseCounter);
			setTimeout(reset, 1000);
			}
		});
		
	
	});