function insert_Row() {
	let element = document.getElementById("sampleTable");
	element.innerHTML = "<tr><td>New Cell1</td><td>New Cell2</td></tr>" + element.innerHTML;
}
