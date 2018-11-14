var div1;
	var div2;
	var div3;
	var div4;
	var one = true;
	function getDataToDiv() {
		//task 1
		today = new Date();
		year = today.getFullYear();
		month = today.getMonth()+1;
		day = today.getDate();
		//task 2
		//current month and day
		
		if (month < 10) {
			month = "0" + month;
		}
		
		if (day < 10) { 
			day = "0" + day;
		}
		//alert date to div
		div1 = document.getElementById("div-1");
		div2 = document.getElementById("div-2");
		div3 = document.getElementsByClassName("div-class div-2")[0];
		div4 = document.getElementById("div-4");
		
		div1.innerHTML = "<b>Result (mm-dd-yyyy): </b>" + month+ "-"+ day+ "-"+ year+ "<br />";
		div2.innerHTML = "<b>Result (mm/dd/yyyy): </b>" + month + "/"+ day+ "/"+ year+ "<br />";
		div3.innerHTML = "<b>Result (dd-mm-yyyy): </b>" + day + "-"+ month+ "-"+ year+ "<br />";
		div4.innerHTML = "<b>Result (dd/mm/yyyy):</b>" + day + "/"+ month+ "/"+ year+ "<br />";
	}
	function CalcToDiv() {
		getDataToDiv();
		if (one){
			//task 3 :calc p count
			var container =  document.getElementById("container");
			var	firstParagraph = container.firstElementChild;
			var p = document.createElement("p");
			var count = document.getElementById("container").getElementsByTagName("p").length + 1;
			p.innerHTML = "<b>New p.Paragraphs amount = </b>" + count;
			container.insertBefore(p, firstParagraph );   
			////task 4: style green
			
			var clName = document.querySelector(".div-2");
				div3.classList.toggle("div-2");
				div3.classList.toggle("div-3");
		}
		one = false;
    }