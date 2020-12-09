const json = document.querySelector("#json");
const csv = document.querySelector("#csv");
const button = document.querySelector("#convert");
const msj = document.querySelector(".msj");

document.addEventListener("DOMContentLoaded", () => {
	let html =
		'"Id","UserName"\n"1","Sam Smith"\n"2","Fred Frankly"\n"1","Zachary Zupers"';
	csv.innerHTML = html;
});

button.addEventListener("click", readCsv);

//functions
function readCsv(e) {
	e.preventDefault();
	try {
		const text = csv.value.split("\n");
		toJson(text);
	} catch (error) {
		console.log(error);
		msj.textContent = "Ingrese un csv valido";
		setTimeout(() => (msj.innerHTML = ""), 1000);
	}
}
function toJson(text) {
	const columns = text[0].split(",");
	const objList = text.slice(1);
	let html = "[";
	objList.forEach((ele) => {
		const list = ele.split(",");
		html += "{";
		for (let i = 0; i < list.length; i++) {
			html += `${columns[i]}:${list[i]},`;
		}
		html = html.slice(0, -1);
		html += "},";
	});
	html = html.slice(0, -1);
	html += "]";
	json.innerHTML = html;
}
