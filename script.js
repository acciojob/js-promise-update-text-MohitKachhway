//your JS code here. If required.
let prom = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!")
	},1000)
})
let output = document.getElementById("output");
prom.then((data)=>{
	output.textContent = data;
})