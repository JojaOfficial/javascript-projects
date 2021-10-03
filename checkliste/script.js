if (localStorage.getItem("tasks_storage") == null) {
	var tasks = [];
	console.log(tasks)
}else {
	var tasks = localStorage.getItem("tasks_storage");
	tasks = JSON.parse(tasks);
	console.log(tasks)
}

function time_and_date() {
	const d = new Date();
	let date;
	date = d.getDate()+"."+d.getMonth()+"."+d.getFullYear()+" | ";
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
	document.getElementById("timedate").innerHTML = date+time;
	setTimeout(time_and_date,1000);
}

function update_tasks(tasks) {
	let rows = "";
	for (let i = 0;i < tasks.length;i++) {
		let task = tasks[i];
		let row = '<tr id="row_'+i+'"><th scope="row"><input type="checkbox"></th><th>'+task+'</th><th><button type="button" class="btn btn-danger" onClick="delete_row(row_'+i+')">Danger</button></th></tr>';
		rows += row;
	}
	document.getElementById("start_point").innerHTML = rows;
	localStorage.setItem("tasks_storage",JSON.stringify(tasks));
}

function delete_row(row) {
	tasks.splice(row,1);
	update_tasks(tasks);
}

function add_todo() {
	let value = document.getElementById("todo_input_value").value;
	tasks.push(value);
	update_tasks(tasks);
	document.getElementById("todo_input_value").value = "";
}

update_tasks(tasks)