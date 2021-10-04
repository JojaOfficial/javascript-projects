function time_and_date() {
	const d = new Date();
	let date;
	date = d.getDate()+"."+d.getMonth()+"."+d.getFullYear();
	if (String(d.getHours()).length ==2){
		hours = d.getHours()
	} else {
		hours = "0"+d.getHours()
	}
	if (String(d.getMinutes()).length ==2){
		minutes = d.getMinutes()
	} else {
		minutes = "0"+d.getMinutes()
	}
	if (String(d.getSeconds()).length ==2){
		seconds = d.getSeconds()
	} else {
		seconds = "0"+d.getSeconds()
	}
	time = hours+":"+minutes+":"+seconds;
	
	document.getElementById("timedate").innerHTML = date+"<br>"+time;
	setTimeout(time_and_date,1000);
	
}