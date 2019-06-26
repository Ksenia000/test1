	function calculateChristmas() {	
		today = new Date();
		var christ = new Date(today.getFullYear(), 11, 25);
		if (today.getMonth()==11 && today.getDate()>25) 
		{
			christ.setFullYear(cmas.getFullYear()+1); 
		}  
		var day = 1000*60*60*24;
		var res = Math.ceil((christ.getTime()-today.getTime())/(day));
		document. getElementById( "christmas_text" ).innerHTML = "Before Christmas left";
		document. getElementById( "christ" ).innerHTML = res+"  days!";
		document. getElementById( "christ2" ).innerHTML = (res-1) +"  days)";
		document. getElementById( "christ3" ).innerHTML = "  joke)";
		document. getElementById( "christ4" ).innerHTML = res +"  days!";
	}
	
