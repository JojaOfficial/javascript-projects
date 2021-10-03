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

if (localStorage.getItem("expenses_storage") == null) {
	var expenses = [];
}else {
	var expenses = localStorage.getItem("expenses_storage");
	expenses = JSON.parse(expenses);
}

function add_expense() {
	let detail = document.getElementById("detail_value").value;
	let amount = document.getElementById("amount_value").value;
	let date = document.getElementById("date_value").value;

	document.getElementById("detail_value").value = "";
	document.getElementById("amount_value").value = "";
	document.getElementById("date_value").value = "";



	let expense = [detail,date,amount];
	expenses.push(expense);
	console.log(expenses);
	update_expense_list(expenses);
}

function update_expense_list(expenses) {
	let tables = "";
	for (let i = 0;i < expenses.length;i++) {
		let table='<tr id="row_'+i+'"><th>'+expenses[i][0]+'</th><th>'+expenses[i][1]+'</th><th>'+expenses[i][2]+'</th><th><button type="button" class="btn btn-danger" onClick="delete_row(row_'+i+')">Delete</button></th></tr>';
		tables += table;
	}
	document.getElementById("start_point").innerHTML = tables;
	localStorage.setItem("expenses_storage",JSON.stringify(expenses));
}

function delete_row(row) {
	expenses.splice(row,1);
	update_expense_list(expenses);
}

function clear_list() {
	expenses = [];
	update_expense_list(expenses)
}


update_expense_list(expenses)