const form = document.querySelector('form');
// This usecase will give us empty value;
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    if(bmi < 18.6){
      results.innerHTML = `<span> You are Underweight.</span>`;
    }
    else if(bmi > 18.6 && bmi < 24.9){
      results.innerHTML = `<span>You are in Normal range.</span>`;
    }
    else{
      results.innerHTML = `<span>You are Overweight</span>`;
    }
  }
});