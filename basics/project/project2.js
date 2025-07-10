const form = document.querySelector('form')

form.addEventListener('submit' , function(e) {
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height===''  || height<0 || isNaN(height)) {
  results.innerHTML=`not a valid value ${height}`;
}
else if(weight ==='' || weight<0 || isNaN(weight)) {
  results.innerHTML=`not a valid value ${weight}`;
  } else {
    const bmi = (weight /((height*height)/10000)).toFixed(3);
    results.innerHTML = `<span>${bmi} </span>`;
  }

});