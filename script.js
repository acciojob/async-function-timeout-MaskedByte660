//your JS code here. If required.
let output = document.getElementById("output");
console.log(output);
let text = document.getElementById("text").value;
console.log(text);
let delay = document.getElementById("delay").value;
console.log(delay)

document.getElementById("btn").addEventListener("click", async ()=>{
	let p = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},delay)
	}) 

	let res = await p;
	output.innerText = text;
	console.log("innerText", output.innerText)
	
})