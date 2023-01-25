
    let output= document.getElementById('output');

async function random(){
const api=await fetch("https://api.quotable.io/random");
const result=await api.json();
// console.log(result);
output.innerHTML=`
<div class="quotes"><h2>"${result.content}"</div>
<p>~${result.author}</p>

`
}
random();