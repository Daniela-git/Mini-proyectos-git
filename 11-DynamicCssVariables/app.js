//variables
let user = document.querySelector("#user");
let password = document.querySelector("#password");
let login = document.querySelector(".accept");
let cancel = document.querySelector(".cancel");
let msg = document.querySelector(".msg");

//event listeners
login.addEventListener("click", check);

//functions
function check(e) {
	e.preventDefault;
	let inputUser = user.value;
	let inputPass = password.value;
	let spaces = false;
  let wrong = false;
  user.classList.remove("spaces","wrong")
  password.classList.remove("spaces","wrong")
	if (inputPass.includes(" ") || inputPass == "") {
		password.classList.add("spaces");
		spaces = true;
	}else if (inputPass != "mypassword") {
		password.classList.add("wrong");
		wrong = true;
	}
	if (inputUser.includes(" ") || inputUser == "") {
		user.classList.add("spaces");
		spaces = true;
	}else if (inputUser != "testuser") {
		user.classList.add("wrong");
		wrong = true;
	}
	if (spaces) {
		showMsg("spaces");
	}
	if (wrong) {
		showMsg("wrong")
	}
}

function showMsg(typeE) {
	if (typeE === "spaces") {
		msg.innerText =
			"All fields are necesary and the used of space isn't allowed";
		setTimeout(() => {
			msg.innerText = "";
		}, 2500);
	}else{
    msg.innerText =
			"Data is incorrect";
		setTimeout(() => {
			msg.innerText = "";
		}, 2500);
  }
}
