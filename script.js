function insert_Row() {
	let element = document.getElementById("sampleTable");
	element.innerHTML = "<tr><td>New Cell1Row1 cell1</td><td>New Cell2Row1 cell2</td></tr>" + element.innerHTML;
}
