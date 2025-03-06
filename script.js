//your JS code here. If required.
let output = document.getElementById("output");
// console.log(output);
let text = document.getElementById("text");
// console.log(text.value);
let delay = document.getElementById("delay");
// console.log(delay.value)

document.getElementById("btn").addEventListener("click", async ()=>{
	let p = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},delay.value)
	}) 

	let res = await p;
	output.innerText = text.value;
	
})