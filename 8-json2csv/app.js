const json = document.querySelector("#json");
const csv = document.querySelector("#csv");
const button = document.querySelector("#convert");

button.addEventListener("click", readJson);

//functions
function readJson(e) {
	e.preventDefault();
	try {
		const obj = JSON.parse(json.value);
		toCSV(obj);
	} catch (error) {
		console.log("ingrese un json valido");
	}
}
function toCSV(obj) {
	const objList = Object.values(obj);
	const columns = Object.keys(obj[0]);
	let html = "";
	columns.forEach((col) => {
		html += `"${col}",`;
	});
	html += "\n";
	for (let i = 0; i < objList.length; i++) {
		let linea = "";
		for (const [key, valor] of Object.entries(objList[i])) {
			linea += `"${valor}",`;
		}
		html += linea + "\n";
	}
	csv.innerHTML = html;
}
