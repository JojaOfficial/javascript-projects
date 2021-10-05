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

function show_dropdown() {
	const text = `
		FINISHED PROJECTS<br>
		<a id="dropdown_link" href="bootstrap/index.html">bootstrap</a><br>
		<a id="dropdown_link" href="checkliste/index.html">checkliste</a><br>
		<a id="dropdown_link" href="expense tracker/index.html">expense tracker</a><br>
		<a id="dropdown_link" href="my-template/index.html">my-template</a><br>
		<a id="dropdown_link" href="tree-fractal/index.html">tree fractal</a>
	`;
	document.getElementById("dropdown_start").innerHTML = text;
}

function hide_dropdown() {
	console.log("test");
	const text = `
		FINISHED PROJECTS
	`;
	document.getElementById("dropdown_start").innerHTML = text;
}