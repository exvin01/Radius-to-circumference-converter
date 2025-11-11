const radius = document.getElementById('radius');
const answer = document.getElementById('answer');
const info = document.getElementById('info');
const pi = 3.14159;
let circumference;
let rad;

answer.onclick = function(){
  rad = parseFloat(radius.value);
  circumference = rad * 2 * pi;
  info.textContent = `The circumference is ${circumference} units`;
}