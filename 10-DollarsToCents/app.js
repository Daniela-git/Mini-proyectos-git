//values
let input = document.querySelector("#dollar");
let send = document.querySelector("#send");

//event listeners
send.addEventListener("click", readData);

//functions
function readData(e) {
	e.preventDefault;
  //read de input and past to integer
  
	let dollar = parseFloat(input.value)*100;
	toCoins(dollar);
}

function toCoins(dollar) {
	let dic = {
		1: { name: "penny (1¢)", number: 0 },
		5: { name: "nickel (5¢)", number: 0 },
		10: { name: "dime (10¢)", number: 0 },
		25: { name: "quarter (25¢)", number: 0 },
	};
	let list = [25, 10, 5, 1];
	const reducer = (acc, curr) => {
		if (acc >= curr) {
			dic[curr].number = Math.trunc(acc / curr);
			return acc - Math.trunc(acc / curr) * curr;
		} else {
			return acc;
		}
	};
  list.reduce(reducer, dollar);
  showResults(dic)
  
}

function showResults(dic){
  let results = document.querySelector(".results");
  for(const[key, coin] of Object.entries(dic)) {
    let divResult = document.createElement("div")
    let title = document.createElement("h3")
    let quantity = document.createElement("h4")
    title.innerText = coin.name
    quantity.innerText = coin.number
    divResult.appendChild(title)
    divResult.appendChild(quantity)
    divResult.classList.add("result")
    title.classList.add("title_result")
    quantity.classList.add("quantity_result")
    results.appendChild(divResult)
  }

}