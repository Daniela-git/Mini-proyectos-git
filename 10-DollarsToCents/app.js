/*
penny = 1
Nickel = 5
Dime  = 10
Quarter = 25
*/

//values
let input = document.querySelector("#dollar");
let send = document.querySelector("#send");

//event listeners
send.addEventListener("click", readData);

//functions
function readData(e) {
  e.preventDefault;
  //read de input and past to integer
  let dollar = input.value.replace(".","");
  dollar = parseInt(dollar)
  toCoins(dollar)
}

function toCoins(dollar){
  let dic = {
    1:{name:"penny",number:0},
    5:{name:"nickel",number:0},
    10:{name:"dime",number:0},
    25:{name:"quarter",number:0}
  }
  let list=[25,10,5,1]

  const reducer = (acc,curr) =>{
    if (acc>=curr){
      dic[curr].number = Math.trunc(acc/curr)
      return acc-Math.trunc(acc/curr)*curr
    }else{      
      return acc
    }

  }
  let total = list.reduce(reducer,dollar)
  console.log(dic)
  

}