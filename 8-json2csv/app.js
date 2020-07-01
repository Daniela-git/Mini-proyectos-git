const obj = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org"
	},
	{
		id: 2,
		name: "Ervin Howell",
		username: "Antonette",
		email: "Shanna@melissa.tv",
		phone: "010-692-6593 x09125",
		website: "anastasia.net"
	},
];

const contenido = document.querySelector("#cuerpo");
const listaObjs = Object.values(obj);
const columnas = Object.keys(obj[0]);
let html = "";
columnas.forEach((columna) => {
	html += `"${columna}",`;
});
html += '\n'
for (let i = 0; i < listaObjs.length; i++) {
    let linea = ''
	for (const [key, valor] of Object.entries(listaObjs[i])) {
        linea += `"${valor}",`;
    }
    html += linea+'\n'
}
contenido.innerHTML = html;
// console.log(html)
