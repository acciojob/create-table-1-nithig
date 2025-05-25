function insert_Row() {
	let element = document.getElementById("sampleTable");
	element.innerHTML = "<tr><td>New cell1</td><td>New cell2</td></tr>" + element.innerHTML;
}
